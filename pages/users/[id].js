import React from 'react';

const UserDetail = ({ user }) => {
  if (!user) {
    return <h1>Pengguna tidak ditemukan</h1>;
  }
  return (
    <div>
      <h1>Nama : {user.name}</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
      <p>Geo: Lat {user.address.geo.lat}, Lng {user.address.geo.lng}</p>
      <p>Telepon: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Company: {user.company.name}</p>
      <p>Slogan: {user.company.catchPhrase}</p>
      <p>Business: {user.company.bs}</p>
    </div>
  );
  
};

// Menggunakan SSG untuk generate halaman statis berdasarkan ID
export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  // Generate paths berdasarkan user ID
  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }));

  return {
    paths,
    fallback: false, // Jika ID tidak ditemukan, tampilkan 404
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}

export default UserDetail;
