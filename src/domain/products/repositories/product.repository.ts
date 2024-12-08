import { CreateProductDto } from "../dtos/create-product.dto";
import { UpdateProductDto } from "../dtos/update-product.dto";

// TODO: Create entities
export abstract class ProductRepository {

  abstract create( product:CreateProductDto ): Promise<any>;
  abstract getAll(): Promise<any>;  
  
  abstract getById( id:string ): Promise<any>;
  abstract updateById( product:UpdateProductDto ): Promise<any>;

  abstract deleteById( id:string ): Promise<any>;

}


