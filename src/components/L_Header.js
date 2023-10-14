import React from "react";
<<<<<<< HEAD
import Style from '../assets/style/header.module.scss';
=======

import Style from '../assets/style/header.module.scss';

>>>>>>> 3642c7e3f0fbbac191afd418488231e310a59d81
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faUserPen } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
<<<<<<< HEAD
=======
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'

>>>>>>> 3642c7e3f0fbbac191afd418488231e310a59d81
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Stack } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

<<<<<<< HEAD
class L_Header extends React.Component {

=======
import HorizontalStack from "./HorizontalStack";
import CustomNavDropdown from "./DropDownStack";

const dropdownItems = [
    {
        link: '',
        desc: 'View Meeting Schedule'
    },
    {
        link: '',
        desc: 'View Teaching Schedule'
    },
    {
        link: '',
        desc: "View Students' Request"
    },
    {
        link: '',
        desc: 'Create slot'
    },
]

class L_Header extends React.Component {
>>>>>>> 3642c7e3f0fbbac191afd418488231e310a59d81

    render() {
        return (
            <Stack className={Style.container}>
                <div className={Style.div1}>
                    <div className={Style.notify_icon}>
                        <FontAwesomeIcon icon={faBell} color="#fff" size="xl" />
                    </div>
                    <NavDropdown className={Style.nav} title="Teacher [Hungld]" id="nav-dropdown">
                        <NavDropdown.Item>
                            <FontAwesomeIcon icon={faUser} style={{ color: "#000000", paddingRight: " 5px", }} />
                            View Profile
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <FontAwesomeIcon icon={faUserPen} style={{ color: "#000000", paddingRight: " 5px", }} />
                            Edit Profile
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <FontAwesomeIcon icon={faCalendarDays} style={{ color: "#000000", paddingRight: " 5px", }} />
                            View Meeting
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <FontAwesomeIcon icon={faRightFromBracket} style={{ color: "#050505", paddingRight: " 5px", }} />
                            Log out
                        </NavDropdown.Item>
                    </NavDropdown>
                </div>
                <Stack direction="horizontal" gap={3} className={Style.div2}>
                    <h1 style={{ color: "#fff", fontWeight: '700', margin: '0' }}>MML - MEET MY LECTURER</h1>

                    <Button className='ms-auto' variant="light" style={{ borderRadius: '10px', }}>
                        <FontAwesomeIcon icon={faCirclePlus} style={{ color: "#fa8334", paddingRight: "10px", }} />
                        Create Slot
                    </Button>
                </Stack>
                <Stack direction="horizontal" gap={5} className={Style.div3}>
<<<<<<< HEAD
                    <Stack direction="horizontal" gap={2}>
                        <FontAwesomeIcon icon={faHouse} style={{ color: "#0a0a0a", }} />
                        <NavLink href="">
                            Home
                        </NavLink>
                    </Stack>
                    <Stack direction="horizontal" gap={2}>
                        <FontAwesomeIcon icon={faCalendarDays} style={{ color: "#0a0a0a", }} />
                        <NavDropdown title="Schedule">
                            <NavDropdown.Item>
                                <NavLink href="">View Meeting Schedule</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink href="">View Teaching Schedule</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink href="">View Students' Request</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink href="">Create slot</NavLink>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Stack>
=======

                    <HorizontalStack icon={faHouse} text='Home' link="/" />
                    <CustomNavDropdown title='Schedule' icon={faCalendarDays} items={dropdownItems} />
                    <HorizontalStack modify='ms-auto' icon={faCircleQuestion} text='Help Center' link="/" />

>>>>>>> 3642c7e3f0fbbac191afd418488231e310a59d81
                </Stack>
            </ Stack>
        );
    }
}

export default L_Header;