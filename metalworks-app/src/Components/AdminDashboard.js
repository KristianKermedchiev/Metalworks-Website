import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, updateDoc, } from 'firebase/firestore';
import { db } from '../firebase';
import '../Styles/AdminDashboard.css';

function AdminDashboard() {

    const [metalsData, setMetalsData] = useState([]);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const metalsCollection = collection(db, 'Metals');
            const metalsQuery = query(metalsCollection, orderBy('id'));

            try {
                const snapshot = await getDocs(metalsQuery);
                const metals = snapshot.docs.map((doc) => {
                    const { name, price } = doc.data();
                    return { name, price };
                });
                setMetalsData(metals);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    useEffect(() => {
        const initialFormData = {};
        metalsData.forEach((metal) => {
            initialFormData[metal.name] = metal.price;
        });
        setFormData(initialFormData);
    }, [metalsData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const metalsCollection = collection(db, "Metals");
          const querySnapshot = await getDocs(metalsCollection);
          querySnapshot.forEach(async (doc) => {
            const metalData = doc.data();
            const metalName = metalData.name;
            metalData.price = formData[metalName];
            await updateDoc(doc.ref, metalData);
          });
        } catch (error) {
          console.error("Error updating data: ", error);
        }
      };

    const inputFields = Object.keys(formData).map((metalName, i) => (
        <div className="form-group" key={`field${i}`}>
            <label className="label-name" htmlFor={metalName}>{metalName + " лв/тон"}</label>
            <input
                type="text"
                id={metalName}
                name={metalName}
                value={formData[metalName]}
                onChange={handleChange}
            />
        </div>
    ));

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                {inputFields}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AdminDashboard;