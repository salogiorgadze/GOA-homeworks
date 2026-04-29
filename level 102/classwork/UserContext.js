import { createContext, useState, useMemo } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([])

  const totalUsers = useMemo(() => {
    console.log("Calculating total users...");
    return users.length;
  }, [users])
  // useMemo აქ გვიცავს ზედმეტი გამოთვლისგან
  // მხოლოდ მაშინ გადაითვლის როცა users შეიცვლება

  return (
    <UserContext.Provider value={{ users, setUsers, totalUsers }}>
      {children}
    </UserContext.Provider>
  )
}