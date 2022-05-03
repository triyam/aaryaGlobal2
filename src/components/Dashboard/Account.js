/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import './account.css'

const Account = () => (
    <div className="container light-style flex-grow-1 container-p-y">
  <h4 className="font-weight-bold py-3 mb-4">
    Account settings
  </h4>
  <div className="card overflow-hidden">
    <div className="row no-gutters row-bordered row-border-light">
      <div className="col-md-3 pt-0">
        <div className="list-group list-group-flush account-settings-links">
          <a className="list-group-item list-group-item-action active" data-toggle="list" href="#account-general">General</a>
          <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-change-password">Change password</a>
          <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-info">Info</a>
          <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-social-links">Social links</a>
          <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-connections">Connections</a>
          <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-notifications">Notifications</a>
        </div>
      </div>
      <div className="col-md-9">
        <div className="tab-content">
          <div className="tab-pane fade active show" id="account-general">
            <div className="card-body media align-items-center">
              <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="this" className="d-block ui-w-80" />
              <div className="media-body ml-4">
                <label htmlFor='upload' className="btn btn-outline-primary">
                  Upload new photo
                  <input type="file" className="account-settings-fileinput" />
                </label> &nbsp;
                <button type="button" className="btn btn-default md-btn-flat">Reset</button>
                <div className="text-light small mt-1">Allowed JPG, GIF or PNG. Max size of 800K</div>
              </div>
            </div>
            <hr className="border-light m-0" />
            <div className="card-body">
              <div className="form-group">
                <label htmlFor='username' className="form-label">Username</label>
                <input type="text" className="form-control mb-1" defaultValue="nmaxwell" />
              </div>
              <div className="form-group">
                <label htmlFor='name' className="form-label">Name</label>
                <input type="text" className="form-control" defaultValue="Nelle Maxwell" />
              </div>
              <div className="form-group">
                <label htmlFor='email' className="form-label">E-mail</label>
                <input type="text" className="form-control mb-1" defaultValue="nmaxwell@mail.com" />
                <div className="alert alert-warning mt-3">
                  Your email is not confirmed. Please check your inbox.<br />
                  <a href="#/">Resend confirmation</a>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor='company' className="form-label">Company</label>
                <input type="text" className="form-control" defaultValue="Company Ltd." />
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="account-change-password">
            <div className="card-body pb-2">
              <div className="form-group">
                <label htmlFor='currentpassword' className="form-label">Current password</label>
                <input type="password" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor='newpassword' className="form-label">New password</label>
                <input type="password" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor='repeatnewpassword' className="form-label">Repeat new password</label>
                <input type="password" className="form-control" />
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="account-info">
            <div className="card-body pb-2">
              <div className="form-group">
                <label htmlFor='bio' className="form-label">Bio</label>
                <textarea className="form-control" rows={5} defaultValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc arcu, dignissim sit amet sollicitudin iaculis, vehicula id urna. Sed luctus urna nunc. Donec fermentum, magna sit amet rutrum pretium, turpis dolor molestie diam, ut lacinia diam risus eleifend sapien. Curabitur ac nibh nulla. Maecenas nec augue placerat, viverra tellus non, pulvinar risus."} />
              </div>
              <div className="form-group">
                <label htmlFor='birthday' className="form-label">Birthday</label>
                <input type="text" className="form-control" defaultValue="May 3, 1995" />
              </div>
              <div className="form-group">
                <label htmlFor='country' className="form-label">Country</label>
                <select className="custom-select">
                  <option>USA</option>
                  <option selected>Canada</option>
                  <option>UK</option>
                  <option>Germany</option>
                  <option>France</option>
                </select>
              </div>
            </div>
            <hr className="border-light m-0" />
            <div className="card-body pb-2">
              <h6 className="mb-4">Contacts</h6>
              <div className="form-group">
                <label htmlFor='phone' className="form-label">Phone</label>
                <input type="text" className="form-control" defaultValue="+0 (123) 456 7891" />
              </div>
              <div className="form-group">
                <label htmlFor='website' className="form-label">Website</label>
                <input type="text" className="form-control" defaultValue />
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="account-social-links">
            <div className="card-body pb-2">
              <div className="form-group">
                <label htmlFor='twitter' className="form-label">Twitter</label>
                <input type="text" className="form-control" defaultValue="https://twitter.com/user" />
              </div>
              <div className="form-group">
                <label htmlFor='facebook' className="form-label">Facebook</label>
                <input type="text" className="form-control" defaultValue="https://www.facebook.com/user" />
              </div>
              <div className="form-group">
                <label htmlFor='google+' className="form-label">Google+</label>
                <input type="text" className="form-control" defaultValue />
              </div>
              <div className="form-group">
                <label htmlFor='linkedin' className="form-label">LinkedIn</label>
                <input type="text" className="form-control" defaultValue />
              </div>
              <div className="form-group">
                <label htmlFor='instagram' className="form-label">Instagram</label>
                <input type="text" className="form-control" defaultValue="https://www.instagram.com/user" />
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="account-connections">
            <div className="card-body">
              <button type="button" className="btn btn-twitter">Connect to <strong>Twitter</strong></button>
            </div>
            <hr className="border-light m-0" />
            <div className="card-body">
              <h5 className="mb-2">
                <a href="/#" className="float-right text-muted text-tiny"><i className="ion ion-md-close" /> Remove</a>
                <i className="ion ion-logo-google text-google" />
                You are connected to Google:
              </h5>
              nmaxwell@mail.com
            </div>
            <hr className="border-light m-0" />
            <div className="card-body">
              <button type="button" className="btn btn-facebook">Connect to <strong>Facebook</strong></button>
            </div>
            <hr className="border-light m-0" />
            <div className="card-body">
              <button type="button" className="btn btn-instagram">Connect to <strong>Instagram</strong></button>
            </div>
          </div>
          <div className="tab-pane fade" id="account-notifications">
            <div className="card-body pb-2">
              <h6 className="mb-4">Activity</h6>
              <div className="form-group">
                <label htmlFor='emailme1' className="switcher">
                  <input type="checkbox" className="switcher-input" defaultChecked />
                  <span className="switcher-indicator">
                    <span className="switcher-yes" />
                    <span className="switcher-no" />
                  </span>
                  <span className="switcher-label">Email me when someone comments on my article</span>
                </label>
              </div>
              <div className="form-group">
                <label htmlFor='emailme2' className="switcher">
                  <input type="checkbox" className="switcher-input" defaultChecked />
                  <span className="switcher-indicator">
                    <span className="switcher-yes" />
                    <span className="switcher-no" />
                  </span>
                  <span className="switcher-label">Email me when someone answers on my forum thread</span>
                </label>
              </div>
              <div className="form-group">
                <label htmlFor='emailme3' className="switcher">
                  <input type="checkbox" className="switcher-input" />
                  <span className="switcher-indicator">
                    <span className="switcher-yes" />
                    <span className="switcher-no" />
                  </span>
                  <span className="switcher-label">Email me when someone follows me</span>
                </label>
              </div>
            </div>
            <hr className="border-light m-0" />
            <div className="card-body pb-2">
              <h6 className="mb-4">Application</h6>
              <div className="form-group">
                <label htmlFor='news' className="switcher">
                  <input type="checkbox" className="switcher-input" defaultChecked />
                  <span className="switcher-indicator">
                    <span className="switcher-yes" />
                    <span className="switcher-no" />
                  </span>
                  <span className="switcher-label">News and announcements</span>
                </label>
              </div>
              <div className="form-group">
                <label htmlFor='weeklyupdates' className="switcher">
                  <input type="checkbox" className="switcher-input" />
                  <span className="switcher-indicator">
                    <span className="switcher-yes" />
                    <span className="switcher-no" />
                  </span>
                  <span className="switcher-label">Weekly product updates</span>
                </label>
              </div>
              <div className="form-group">
                <label htmlFor='weeklyblogs' className="switcher">
                  <input type="checkbox" className="switcher-input" defaultChecked />
                  <span className="switcher-indicator">
                    <span className="switcher-yes" />
                    <span className="switcher-no" />
                  </span>
                  <span className="switcher-label">Weekly blog digest</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="text-right mt-3">
    <button type="button" className="btn btn-primary">Save changes</button>&nbsp;
    <button type="button" className="btn btn-default">Cancel</button>
  </div>
</div>

  )

export default Account