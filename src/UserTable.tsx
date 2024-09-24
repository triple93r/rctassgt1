import React from 'react';

interface IUserTableProps {
  users: { username: string; email: string; password: string }[];
}

const UserTable: React.FC<IUserTableProps> = ({ users }) => {
  return (
    <div>
      <h2 className="text-center mt-4">Registered Users</h2>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan={3} className="text-center">No users registered yet</td>
            </tr>
          ) : (
            users.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
