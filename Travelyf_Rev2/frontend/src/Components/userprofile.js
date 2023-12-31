import React from 'react';
import './userProfile.css';


const UserProfile = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Jordan Ramey</h3>
            </div>
            <div className="panel-body">
              <div className="row">
                <div className="col-md-3 col-lg-3 text-center">
                  <img
                    alt="User Pic"
                    src="https://gravatar.com/avatar/e60ddbdd1921331df1b59abcecb6a8d1?s=80&amp;d=https://codepen.io/assets/avatars/user-avatar-80x80-fd2a2ade7f141e06f8fd94c000d6ac7a.png"
                    className="img-circle img-responsive"
                  />
                </div>
                <div className="col-md-9 col-lg-9">
                  <table className="table table-user-information">
                    <tbody>
                      <tr>
                        <td>Department:</td>
                        <td>Programming</td>
                      </tr>
                      <tr>
                        <td>Hire date:</td>
                        <td>06/01/2011</td>
                      </tr>
                      <tr>
                        <td>Date of Birth</td>
                        <td>08/25/2016</td>
                      </tr>
                      <tr>
                        <td>Gender</td>
                        <td>Male</td>
                      </tr>
                      <tr>
                        <td>Home Address</td>
                        <td>Street in, State</td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td>
                          <a href="mailto:info@support.com">info@email.com</a>
                        </td>
                      </tr>
                      <tr>
                        <td>Phone Number</td>
                        <td>123-4567-890</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
