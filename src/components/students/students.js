import React from "react";
import { students } from '../../services/students'
import './students.css'
export class Students extends React.Component {
    render() {
        return (
            <div>
                <h2>Student</h2>
                <table>
                    <tr><th>Company</th><th>Contact</th><th>Country</th></tr>
                    {students.map((student) =>
                        <tr><td>{student.company}</td><td>{student.contact}</td><td>{student.country}</td></tr>
                    )}
                </table>
            </div>
        );
    }
}