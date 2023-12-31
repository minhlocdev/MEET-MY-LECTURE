import React from 'react'
import Style from '../../assets/style/admin.module.scss'
import Nav from './Nav'
import { MajorCreate, MajorEdit, MajorList } from './Major'
import { useNavigate, useParams } from 'react-router-dom'
import { RoomCreate, RoomEdit, RoomList } from './Room'
import { SubjectCreate, SubjectEdit, SubjectList } from './Subject'
import { UserEdit, UserList } from './User'
import { SemesterList } from './Semester'
import { SlotList } from './Slot'


function Home({ Toggle }) {
    const { type, action, id } = useParams();
    const navigate = useNavigate()
    return (
        <div className={Style.home}>
            <Nav Toggle={Toggle} />
            <div style={{ marginTop: '80px' }}>
                {(type === "major" && !action) && <MajorList />}
                {(type === "major" && action === 'edit' && id) && <MajorEdit />}
                {(type === "major" && action === 'edit' && !id) && navigate('/admin/major')}
                {(type === "major" && action === 'create') && <MajorCreate />}

                {(type === "room" && !action) && <RoomList />}
                {(type === "room" && action === 'edit' && id) && <RoomEdit />}
                {(type === "room" && action === 'create') && <RoomCreate />}

                {(type === "subject" && !action) && <SubjectList />}
                {(type === "subject" && action === 'edit' && id) && <SubjectEdit />}
                {(type === "subject" && action === 'edit' && !id) && navigate('/admin/subject')}
                {(type === "subject" && action === 'create') && <SubjectCreate />}


                {(type === "user" && !action) && <UserList />}
                {(type === "user" && action === 'edit' && id) && <UserEdit />}
                {(type === "user" && action === 'edit' && !id) && navigate('/admin/user')}

                {(type === "semester" && !action) && <SemesterList />}
                {/* {(type === "semester" && action === 'edit' && id) && <UserEdit />} */}
                {(type === "slot" && !action) && <SlotList />}


            </div>
        </div >)
}
export default Home