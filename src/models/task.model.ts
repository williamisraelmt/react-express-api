import { Table, Column, Model, HasMany } from 'sequelize-typescript';

@Table({
    timestamps: true,
})
class Task extends Model {
    @Column
    declare description: string;
    @Column
    declare date: Date;
    @Column
    declare complete: boolean;
}

export default Task;