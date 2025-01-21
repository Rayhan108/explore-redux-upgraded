import { AddUserModal } from "@/module/AddUserModal/AddUserModal";



const Users = () => {
    // const users= useAppSelector(selectUsers)
    return (
        <>
        <h1 className="text-3xl flex justify-center items-center">Tasks List</h1>
    
        <div className="mx-auto max-w-7xl px-5 mt-10">
          <div className="flex justify-end">
   
            <AddUserModal />
          </div>
          <div className="space-y-5 mt-5">
            {/* {users?.map((user) => (
              <UserCard user={user} key={user.id} />
            ))} */}
          </div>
        </div>
      </>
    );
};

export default Users;