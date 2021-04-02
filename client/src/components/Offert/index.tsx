import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import Swal from "sweetalert2";
import { StyledOffert } from "./StyledOffert";
import { SET_OFFER } from "../../graphql/mutations";
import { GET_CATEGORIES, GET_PRODUCTS } from "../../graphql/queries";


interface Offert {
  className: String;
}

export default function Offert() {

  const [setOffert, { error: errorMutationReview }] = useMutation(
    SET_OFFER,
    {refetchQueries: [{query: GET_PRODUCTS}]}
  );

  if (errorMutationReview) {
    console.error(errorMutationReview);
  }

  const { data:catData, loading:catLoading, error: catError } = useQuery(GET_CATEGORIES, {});
  const { data:prodData, loading:prodLoading, error:prodError } = useQuery(GET_PRODUCTS, {});

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
      return
    }

    setForm({ ...form,
      target: value,
    })

    if (value === 'category'){
      console.log('elegi categoria')
      console.log(`catData.categories`, catData.categories)
      catData.categories && setOptions(catData.categories);
      setOptions(catData.categories)
    }

    if (value === 'product'){
      console.log(`prodData`, prodData.products)
      setOptions(prodData.products)
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
          // disabled={form.error}
          />
      </form>
    </StyledOffert>
  );
}