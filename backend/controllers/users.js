import { v4 as uuidv4 } from "uuid";

let users=[];

export const signUp=(req, res) => {
  const user=req.body;
  const exists=users.find((u)=>u.email===user.email);
  if (exists){
    return res.send({ success: false, message: "Email already used" });
  }

  const newUser={...user, id: uuidv4()};
  users.push(newUser);
  res.send({success: true, user: newUser });
};

export const logIn=(req, res) => {
  const { email, password }=req.body;
  const user = users.find((u)=>u.email===email&& u.password===password);
  if (!user) {
    return res.send(null);
  }
  res.send(user);
};

export const deleteUser=(req, res) => {
  const {id}=req.params;
  users=users.filter((user)=>user.id!==id);
  return res.send("User deleted");
};
