import { Prop } from "@nestjs/mongoose";
import { Document } from "mongoose";


export class Task extends Document {

    @Prop({
        index:true,
    })
    name : string;

    @Prop({
        index:true,
    })
    description : string

    @Prop({
        index:true,
    })
    dateCreate: Date;

    @Prop({
        index:true,
    })
    dateUpdate: Date;


}