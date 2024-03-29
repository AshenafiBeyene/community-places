import {useEffect,useCallback,useState} from "react";
let logoutTimer;
export const useAuth = () =>{
  const [token, setToken] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid, token, expirationDate) => {
    setToken(token);
    setUserId(uid);
    const tokenExpirationDate = expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid,
        token: token,
        expiration: tokenExpirationDate.toISOString(),
      })
    );
  }, []);
  const logout = useCallback(() => {
    setToken(null);
    setTokenExpirationDate(null);
    setUserId(null);
    localStorage.removeItem("userData");
  }, []);

 useEffect(() => {
   if (token && tokenExpirationDate) {
     const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
     logoutTimer = setTimeout(logout, remainingTime);
   } else {
     clearTimeout(logoutTimer);
   }
 }, [token, logout, tokenExpirationDate]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"));
    if (data && data.token&& new Date(data.expiration) > new Date()) { //take iso object and convert it to date object
      login(data.userId, data.token);
    }
  },[login])
  return {token,login,logout,userId};
}