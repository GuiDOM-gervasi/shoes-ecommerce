import {
  BelongsToMany,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
  Unique
} from "sequelize-typescript";

export interface UserAttributes {
  id?: string;
  firstName: string;
}

export interface ProductAttributes {
  id?: string;
  name: string;
  description: string;
  price: number;
  brandId:string;
  CategoriesId: [string];
  
}

export interface CategoryAttributes {
  id?: string;
  name: string;
}

export interface BrandAttributes {
  id?: string;
  name: string;
}
// Definitions of tables and sequelize models 
// Table productcategory
@Table({
defaultScope:{
  attributes: {exclude: ['deleteAt']}
},
paranoid: true,
tableName: 'productcategory'
})

export class ProductCategory extends Model{

  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER.UNSIGNED
  })
  id?: string;
  
  @Column({
    allowNull: false,
    type: DataType.INTEGER.UNSIGNED
  })
  @ForeignKey( () => Product )
  productId: string;
  
  @Column({
    allowNull: false,
    type: DataType.INTEGER.UNSIGNED
  })
  @ForeignKey( () => Category )
  categoryId: string;

  // @Column({
  //   allowNull: false,
  //   type: DataType.INTEGER.UNSIGNED
  // })
  // @ForeignKey(() => Brand)
  // brandId!: string;
}

@Table({
  defaultScope:{
    attributes: {exclude: ['deleteAt']}
  },
  paranoid: true,
  tableName: 'brands'
})

export class Brand extends Model<BrandAttributes>{  
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER.UNSIGNED
  })
  id?: string;


  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  name!: string;

  @HasMany (() => Product)
  products!:Product[] 
  

}
//-----------------------------------------------------------------------------

@Table({
  defaultScope:{
    attributes: {exclude: ['deleteAt']}
  },
  paranoid: true,
  tableName: 'products'
})

export class Product extends Model{ //<ProductAttributes>
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER.UNSIGNED
  })
  id?: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  name!: string; 

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  description: string;

  @Column({
    allowNull: false,
    type: DataType.FLOAT
  })
  price!: number;

  @Column({
    allowNull: false,
    type: DataType.INTEGER.UNSIGNED
  })
  @ForeignKey(() => Brand)
  brandId!: string;

  @BelongsTo(() => Brand )
  brand!:Brand;
  
  @BelongsToMany(() => Category,{through: ()=> ProductCategory})
  categories: Array<Category & {ProductCategory: ProductCategory}> 
 
 }

//--------------------------------------------------------------------------------------------
@Table({
  defaultScope:{
    attributes: {exclude: ['deleteAt']}
  },
  paranoid: true,
  tableName: 'users'
})

export class User extends Model<UserAttributes>{  
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER.UNSIGNED
  })
  id?: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  firstName!: string;

}
//--------------------------------------------------------------------------------------------

@Table({
  defaultScope:{
    attributes: {exclude: ['deleteAt']}
  },
  paranoid: true,
  tableName: 'categories'
})

export class Category extends Model<CategoryAttributes>{  
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER.UNSIGNED
  })
  id?: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  name!: string;

  @BelongsToMany(() => Product, {through: () => ProductCategory})
  products: Array<Product & {ProductCategory: ProductCategory}>;

}



//--------------------------------------------------------------------------------------------

// @Table({
//   defaultScope:{
//     attributes: {exclude: ['deleteAt']}
//   },
//   paranoid: true,
//   tableName: 'brands'
// })

// export class Brand extends Model<BrandAttributes>{  
//   @Column({
//     allowNull: false,
//     autoIncrement: true,
//     primaryKey: true,
//     type: DataType.INTEGER.UNSIGNED
//   })
//   id?: string;

//   @Column({
//     allowNull: false,
//     type: DataType.STRING
//   })
//   name!: string;

//   @HasMany (() => Product)
//   products!:Product[] 

// }

export default [User, Product, Category , Brand, ProductCategory];
