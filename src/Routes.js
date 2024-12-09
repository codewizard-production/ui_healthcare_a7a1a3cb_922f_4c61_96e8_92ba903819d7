import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "screens/landing_page";
import {
AppointmentCreate, AppointmentEdit, AppointmentView, 
Appointments
} from "screens";

const Component = (props) => {

    return (
        <Routes>
            

                                                <Route path="/healthcare/html" element={<LandingPage {...props} title={'LandingPage'} nolistbar={true} />} />
                                                        <Route path="Appointments/view/:id" element={<AppointmentView {...props} title={'View Appointment'} />} />
                        <Route path="Appointments/edit/:id" element={<AppointmentEdit {...props} title={'Edit Appointment'} />} />
                        <Route path="Appointments/create" element={<AppointmentCreate {...props} title={'Create Appointment'} />} />
                                                <Route path="/" element={<Appointments {...props} title={'Table Layout'} nolistbar={true} />} />

                <Route path="/appoinmentd1" element={<Appointments {...props} title={'Table Layout'} />} />
        </Routes>
    )

};

export default Component;
