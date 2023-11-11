import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import '../Styles/AdminDashboard.css';

function AdminDashboard() {
    const [metalsData, setMetalsData] = useState([]);
    const [colorMetalsData, setColorMetalsData] = useState([]);
    const [formData, setFormData] = useState({});
    const [formColorData, setFormColorData] = useState({});
    const [successMessageMetals, setSuccessMessageMetals] = useState('');
    const [successMessageColorMetals, setSuccessMessageColorMetals] = useState('');

    useEffect(() => {
        const fetchData = async (collectionName, setData) => {
            const metalsCollection = collection(db, collectionName);
            const metalsQuery = query(metalsCollection, orderBy('id'));

            try {
                const snapshot = await getDocs(metalsQuery);
                const metals = snapshot.docs.map((doc) => {
                    const { name, price } = doc.data();
                    return { name, price };
                });
                setData(metals);
            } catch (error) {
                console.error(`Error fetching ${collectionName} data:`, error);
            }
        };

        fetchData('Metals', setMetalsData);
        fetchData('ColorMetals', setColorMetalsData);
    }, []);

    useEffect(() => {
        const initialFormData = {};
        metalsData.forEach((metal) => {
            initialFormData[metal.name] = metal.price;
        });
        setFormData(initialFormData);

        const initialFormColorData = {};
        colorMetalsData.forEach((colorMetal) => {
            initialFormColorData[colorMetal.name] = colorMetal.price;
        });
        setFormColorData(initialFormColorData);
    }, [metalsData, colorMetalsData]);

    const handleChange = (e, setData, data) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = async (e, collectionName, data, setSuccessMessage) => {
        e.preventDefault();

        try {
            const metalsCollection = collection(db, collectionName);
            const querySnapshot = await getDocs(metalsCollection);
            querySnapshot.forEach(async (doc) => {
                const metalData = doc.data();
                const metalName = metalData.name;
                metalData.price = data[metalName];
                await updateDoc(doc.ref, metalData);
            });

            setSuccessMessage('Успешна промяна!');
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);

        } catch (error) {
            console.error(`Error updating ${collectionName} data:`, error);
        }
    };

    const renderForm = (formData, handleChange, handleSubmit) => {
        const inputFields = Object.keys(formData).map((metalName, i) => (
            <div className="form-group" key={`field${i}`}>
                <label className="label-name" htmlFor={metalName}>{metalName + " лв/тон"}</label>
                <input
                    type="text"
                    id={metalName}
                    name={metalName}
                    value={formData[metalName]}
                    onChange={(e) => handleChange(e, setFormData, formData)}
                />
            </div>
        ));
    
        return (
            <>
                <form className="form" onSubmit={(e) => handleSubmit(e, 'Metals', formData)}>
                    {inputFields}
                    <button type="submit">Submit</button>
                </form>
                {successMessageMetals && <p className="success-message">{successMessageMetals}</p>}
            </>
        );
    };
    
    const renderColorForm = (formColorData, handleChange, handleSubmit) => {
        const inputFields = Object.keys(formColorData).map((colorMetalName, i) => (
            <div className="form-group" key={`colorField${i}`}>
                <label className="label-name" htmlFor={colorMetalName}>{colorMetalName + " лв/тон"}</label>
                <input
                    type="text"
                    id={colorMetalName}
                    name={colorMetalName}
                    value={formColorData[colorMetalName]}
                    onChange={(e) => handleChange(e, setFormColorData, formColorData)}
                />
            </div>
        ));
    
        return (
            <>
                <form className="form" onSubmit={(e) => handleSubmit(e, 'ColorMetals', formColorData)}>
                    {inputFields}
                    <button type="submit">Submit</button>
                </form>
                {successMessageColorMetals && <p className="success-message">{successMessageColorMetals}</p>}
            </>
        );
    };

    return (
        <div className="form-container">
            {renderForm(formData, handleChange, (e) => handleSubmit(e, 'Metals', formData, setSuccessMessageMetals))}
            {renderColorForm(formColorData, handleChange, (e) => handleSubmit(e, 'ColorMetals', formColorData, setSuccessMessageColorMetals))}
        </div>
    );
}

export default AdminDashboard;
