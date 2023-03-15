export interface Employee {
    id: number,
    name : String,
    email:String,
    contact: number,
    gender: String,
    skillsAndExpriences :  skillsAndExpriences[]

}
export interface skillsAndExpriences{
   skill: String,
   exprience :String
}
