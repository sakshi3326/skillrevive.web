import React, { useState, useEffect } from 'react';
import 'firebase/auth';
import { firebaseAuth,logOut } from './firebase-config';
import { onAuthStateChanged } from 'firebase/auth';

function Profile() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
       
      }
    });

    return () => unsubscribe();
  }, []);

 
  return (
    <div>
      <h1>Profile Page</h1>
      {user ? (
        <div>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Display Name:</strong> {user.displayName}</p>
          <p><strong>Photo URL:</strong> {user.photoURL}</p>
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}

      <button onClick={logOut}>Logout</button>

    </div>
    
  );
}

export default Profile;
