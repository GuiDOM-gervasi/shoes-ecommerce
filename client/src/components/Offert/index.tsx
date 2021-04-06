import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import Swal from "sweetalert2";
import { StyledOffert } from "./StyledOffert";
import { SET_OFFER } from "../../graphql/mutations";
import { GET_CATEGORIES, GET_PRODUCTS, GET_OFFERTS } from "../../graphql/queries";


interface Offert {
  className: String;
}

export default function Offert() {

  const [setOffert, { error: errorMutationReview }] = useMutation(
    SET_OFFER,
    {refetchQueries: 
      [
        {query: GET_PRODUCTS},
        {query:GET_OFFERTS, variables: {active: true} }
      ]}
  );

  if (errorMutationReview) {
    console.error(errorMutationReview);
  }

  const { data:catData, loading:catLoading, error: catError } = useQuery(GET_CATEGORIES, {});
  const { data:prodData, loading:prodLoading, error:prodError } = useQuery(GET_PRODUCTS, {});
  const { data:offerData, loading:offerLoading } = useQuery(GET_OFFERTS,{ variables: { active: true}});

  let productsNames = [];
  let categoriesNames= [];

  if(!prodLoading && !catLoading ){

    productsNames =  prodData.products.map(e => e.name)
    categoriesNames =  catData.categories.map(e => e.name)
  }

  const [form, setForm] = useState({
    target: "",
    targetId: "",
    discount: "0",
    duration: "0",
  });
  const [options, setOptions] = useState([])

  const handleTargetSelector = (value:string) => {
    
    if (value === 'notSelected'){
      setOptions([])

      setForm({ ...form,
        target: '',
        targetId: '',
      })

      return
    }

    setForm({ ...form,
      target: value,
    })

    if (value === 'category'){

      catData.categories && setOptions(catData.categories);
      setOptions(catData.categories)
    }

    if (value === 'product'){

      prodData.products && setOptions(prodData.products)
    }
  };

  const handleTargetIdSelector = (key:string) => {
    setForm({
      ...form,
      targetId: key
    })
  }

  const handleInputChange = function(ev: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [ev.target.name]: ev.target.value,
    });
  }

  const handleSubmit = async function(ev: React.ChangeEvent<HTMLFormElement>){
    ev.preventDefault();

    let result = await Swal.fire({
      title: "Are you sure?",
      text: "this action will send email and notifications to clients",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    })

    if (result.isConfirmed){
      try {
        await setOffert({
          variables: {
            target: form.target,
            targetId: form.targetId,
            discount: parseFloat(form.discount),
            duration: parseFloat(form.duration),
          },
        });
      } catch (err) {
        console.error(err);
      }
    }

  }


  //---------------------------------------------------------------------------------------------------------


  return (
    <StyledOffert>

        <h2>Create New Offert</h2>

      <form
        onSubmit={(ev: React.ChangeEvent<HTMLFormElement>): any =>
        handleSubmit(ev)}
      >
        <div className='inputGroup'>
          <select name="target" id="target"
            onChange={(ev: React.ChangeEvent<HTMLSelectElement>): void =>
              handleTargetSelector(ev.target.value)
            }>
            <option value='notSelected' key='notSelected'>Choose an option</option>
            <option value='product' key='product'>Product</option>
            <option value='category' key='category'>Category</option>
          </select>
          {
            options.length < 1?
            <select name="targetId" id="targetId" >
              <option value='0' key='notSelected'>Choose an option</option>
              <option>...</option>
            </select>
            :
            <select  name="targetId" id="targetId"          
            onChange={(ev: React.ChangeEvent<HTMLSelectElement>): void =>
              handleTargetIdSelector(ev.target.value)}
              >
              <option value='notSelected' key='notSelected'>Choose an option</option>
              {options.map( e => 
                <option value={e.id} key = {e.id}>{e.name}</option>
                )
              }
            </select>
          }
        </div>
        <div className='inputGroup'>
          <div className='inputField'>
          <label> Discount: </label>
            <input type='number' min='0' max='100' step='1' name='discount'
              onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                handleInputChange(event)}>
          </input> 
            <label>%</label>
          </div>
          <div className='inputField'>
          <label> Duration: </label>
            <input type='number' min='0' step='0.01'name='duration'
              onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                handleInputChange(event)}>
            </input>
            <label> hr. </label>
          </div>
        </div>
        <input
          className="addButton"
          type="submit"
          value="Create Offert"
          disabled = {!(!!form.target && !!form.targetId) }
          />
      </form>
      <h3>Active offerts</h3>
      <div>
      <ul className="activeUsers">
          <li className="titles">
            <h5>ID</h5>
            <h5>Target</h5>
            <h5>TagetId</h5>
            <h5>Discount</h5>
            <h5>Active</h5>
            {/* <div></div> */}
          </li>
        {
          !offerLoading  && offerData.getOffers.map( offert => 
            <li key={offert.id}>
            <span>
              <p className="info">ID</p>
              {offert.id}{" "}
            </span>
            <span>
              <p className="info">Target</p>
              {offert.target}{" "}
            </span>
            <span >
              <p className="info">Target Name</p>
              {
                offert.target === 'product' 
                ? productsNames[offert.targetId]
                : categoriesNames[offert.targetId]
              }
              {" "}
            </span>
            <span>
              <p className="info">Discount</p>
              {Math.round(offert.discount * 100)}{" % "}
            </span>
            <span>
              <div className="info">
                <span className={offert.targetId ? "active" : "finish"} />
              </div>
            </span>
            </li>
          )
        }
      </ul>
      </div>

    </StyledOffert>
  );
}