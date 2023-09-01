import { useGetProfileQuery } from "@/redux/features/auth/userApi";
import { useEffect, useState } from "react";

const UserInfo = () => {
  const [user, setUser] = useState();
  const { data: userProfile, isLoading, isError } = useGetProfileQuery();
  useEffect(() => {
    if (!isLoading && !isError) {
      console.log("User Profile:", userProfile?.data);
      setUser(userProfile?.data);
    }
  }, [userProfile, isLoading, isError]);

  return user;
};

export default UserInfo;
