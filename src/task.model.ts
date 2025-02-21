import { Table, Column, Model, HasMany } from 'sequelize-typescript';

@Table({
    timestamps: true,
})
class Task extends Model {
    @Column
    declare title: string;
    @Column
    declare materia: string;
}

export default Task;