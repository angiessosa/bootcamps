import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Bootcamp {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    phone: number;

    @Column()
    address: string;

    @Column()
    topics: string;

    @Column({name: 'avarage_rating'})
    averageRating: number;

    @Column()
    createdAt: Date;
}