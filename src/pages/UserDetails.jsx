import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => setUser(res.data));
  }, [id]);

  if (!user) return <div className="container mt-5 text-center">Loading user details...</div>;

  return (
    <div className="container py-5">
      <Link to="/users" className="btn btn-outline-secondary mb-4">
        ← Back to Users
      </Link>

      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h3 className="mb-0">{user.name}</h3>
        </div>
        <div className="card-body">
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noreferrer">{user.website}</a></p>
          <p><strong>Company:</strong> {user.company?.name}</p>
          <p><strong>Address:</strong> {`${user.address.street}, ${user.address.suite}, ${user.address.city} - ${user.address.zipcode}`}</p>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;

