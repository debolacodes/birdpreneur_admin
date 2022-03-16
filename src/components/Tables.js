import React from 'react'
import Title from './Title'

export default function Tables() {
  return (
    <div>
        <div className='row'>
            <div className='col-sm-6'><Title title="My Stores"></Title></div>
            <div className='col-sm-6 table-filters'>
              <div className='search_wrapper'>
                <div className='icon search'></div>
                <input className='search_input' placeholder='Search...' type="text"/>
              </div>
            </div>
          </div>
          <div className='table'>
            <table>
              <thead>
                <tr>
                  <td>Store ID</td>
                  <td>Store Name</td>
                  <td>Location</td>
                  <td>Store Manager</td>
                  <td>Revenue Made</td>
                  <td>Total Customers</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ID: 43178</td>
                  <td>KFC Wuse</td>
                  <td>10 ijaoye street jibowu, Lagos State</td>
                  <td>Morenike Oni</td>
                  <td>₦345,000</td>
                  <td>433</td>
                </tr>
                <tr>
                  <td>ID: 43178</td>
                  <td>KFC Wuse</td>
                  <td>10 ijaoye street jibowu, Lagos State</td>
                  <td>Morenike Oni</td>
                  <td>₦345,000</td>
                  <td>433</td>
                </tr>
                <tr>
                  <td>ID: 43178</td>
                  <td>KFC Wuse</td>
                  <td>10 ijaoye street jibowu, Lagos State</td>
                  <td>Morenike Oni</td>
                  <td>₦345,000</td>
                  <td>433</td>
                </tr>
                <tr>
                  <td>ID: 43178</td>
                  <td>KFC Wuse</td>
                  <td>10 ijaoye street jibowu, Lagos State</td>
                  <td>Morenike Oni</td>
                  <td>₦345,000</td>
                  <td>433</td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
  )
}
