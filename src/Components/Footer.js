import React from "react";
import '../Components/Footer.css';

function Footer(){
    return(
        <div className="footer">
            <div className="container">
                <table>
                
                     {/* column 1 */}
                     <td>
                     <th>Policy</th>
                     <ul className="list-unstyled">
                        <li>Return Policy</li>
                        <li>Terms of use</li>
                        <li>Security</li>
                        <li>Privacy</li>
                        </ul>
                        </td>
                    
                    <td>
                         {/* colimn 2 */}
                        <th>Help</th>
                        <ul className="list-unstyled">
                            <li>Payments</li>
                            <li>Shipping</li>
                            <li>Cancellation & Return</li>
                            <li>FAQ</li>
                        </ul>
                        </td>
                   <td>
                    {/* column 3 */}
                    <th>Social Media</th>
                    <ul className="list-unstyled">
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>YouTube</li>
                    </ul>
                    </td>
                   <td>
                    {/* column 4 */}
                    <th>Address</th>
                    <ul className="list-unstyled">
                        <p>Way 2 Village Green<br/>
                        36,Neithal Street,<br/>
                        Sriram Nagar Extension,<br/>
                        Old Perungalathur,<br/>
                        Chennai-600 063.</p>
                    </ul>
                    </td>
                </table>
                <hr/>
                   <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()}WAY 2 VILLAGE GREEN | All right reserved | Terms of Services | Privacy
                    </p>
                   </div>

                
            </div>
        </div>
    )
}
export default Footer;