import React, { useEffect, useState } from 'react';
import { Success } from './components/Success';
import { Users } from './components/Users';
import './style.scss';

export const LIST_USERS = () => {
    const [users, setUsers] = useState([]);
    const [invites, setInvites] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    
    useEffect(() => {
        fetch('https://reqres.in/api/users')
            .then(res => res.json())
            .then(json => {
                setUsers(json.data);
            })
            .catch(err => {
                console.error(err);
                alert('Error getting user');
            })
            .finally(setLoading(false));
    }, []);

    const onChangeSearchValue = event => {
        setSearchValue(event.target.value)
    };

    const onClickInvite = id => {
        if (invites.includes(id)) {
            setInvites(prev => prev.filter(_id => _id !== id))
        } else {
            setInvites(prev => [...prev, id])
        }
    };

    const onClickSetInvites = () => {
        setSuccess(true);
    }

    const setSuccessClose = () => {
        setInvites([]);
        setSearchValue('');
        setSuccess(false);
    };

    return (
        <section className="section-padding">
            <div className='container'>
                <h2 className='users-title top-title'>Creating a list of users</h2>
                <div className='users-window'>
                    {
                        success ? (
                        <Success count={invites.length} setSuccessClose={setSuccessClose} /> ) : (
                        <Users 
                            items={users}
                            isLoading={isLoading}
                            searchValue={searchValue}
                            onChangeSearchValue={onChangeSearchValue}
                            invites={invites}
                            onClickInvite={onClickInvite}
                            onClickSetInvites={onClickSetInvites} />
                        )
                    }
                </div>
            </div>
        </section>
    );
};