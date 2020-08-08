import React from "react";
import "./experience.css"

export default function Experience() {
  return (
    <div className="exp">
    <h1>So Far...</h1>
    <table className="experience-table"> 
      <tbody> 
        <tr> 
          <td> 
            <ul> 
              <li className="company">Makers Academy </li>
              <li className="role">Junior Software Engineer - Student </li>
              <li className="location">Remote</li>
            </ul>
          </td>
          <td className="timeline"> 
            <div className="date">August 2020</div>
          </td>
          <td className="job-details"> <br/>
            <ul> 
              <li>A 16 week intensive programming bootcamp. (Remote due to COVID-19 lockdown)</li>
              <li>Makers champions Agile/XP methodologies and practices, such as <strong>pair programming</strong>, <strong>TDD</strong> and <strong>ODD</strong>.</li>
              <li>Languages used: <strong>JavaScript, Node.js, React, Express, Redux, Ruby, Ruby-on-Rails, Postgres, HTML, CSS</strong></li>
            </ul><br/>
          </td>
        </tr>
        <tr> 
          <td className="job-details"> <br/>
            <ul>
              <li>Supported the delivery of the Future Operating Model within the NHS, through <strong>relationship management</strong> and <strong>contract management</strong> with NHS Trusts.</li>
              <li><strong>Stakeholder management with Heads of Procurement and key suppliers</strong>, to deliver cost savings for the NHS through management of a national framework and the <strong>understanding and questioning of customer requirements</strong>.</li>
              <li><strong>Spend Analysis</strong>, reviewing current supplier pricing offers and comparing them to the framework. Detailed analysis and process approach to <strong>manipulating data</strong> to ensure it could be easily interpreted and <strong>delivered to the customers expectations</strong>.</li>
            </ul><br/>
          </td>
          <td className="timeline"> 
            <div className="date">May 2020</div>
          </td>
          <td>
            <ul> 
              <li className="company">Collaborative Procurement Partnership </li>
              <li className="role">Category Manager</li>
              <li className="location">London/East of England</li>
            </ul>
          </td>
        </tr>
        <tr> 
          <td> 
            <ul> 
              <li className="company">Scandit </li>
              <li className="role">Sales Development Representative</li>
              <li className="location">London</li>
            </ul>
          </td>
          <td className="timeline"> 
            <div className="date">Jan 2019</div>
          </td>
          <td className="job-details"> <br/>
            <ul>
              <li>Worked on developing sales pipeline and sales leads for a <strong>state of the art barcode scanning and augmented reality software company</strong>.</li>
              <li><strong>Worked along side software engineers</strong> to understand the benefits and mindsets of software engineers in order to <strong>promote the technology</strong>.</li>
            </ul><br/>
          </td>
        </tr>
        <tr> 
          <td className="job-details"> <br/>
            <ul>
              <li>Presented agile problem resolution and completed ad hoc process improvement projects.</li>
              <li>Enhanced client satisfaction by replacing a key product, <strong>working closely with client to define requirements</strong>.</li>
              <li><strong>Prevented account loss</strong> by heading project that offered key change in product sterilisation technique.</li>
              <li><strong>Managed portfolio of UK Sales Agents</strong> and developed strategy to introduce an internal sales team, including recruitment of high potential internal talent.</li>
            </ul><br/>
          </td>
          <td className="timeline"> 
            <div className="date">Oct 2018</div>
          </td>
          <td> 
            <ul> 
              <li className="company">Summit Medical Group</li>
              <li className="role">UK Commercial Manager</li>
              <li className="location">Remote</li>
            </ul>
          </td>
        </tr>
        <tr> 
          <td> 
            <ul> 
              <li className="company">Summit Medical Group</li>
              <li className="role">Business Analyst</li>
              <li className="location">Bourton-on-the-Water</li>
            </ul>
          </td>
          <td className="timeline"> 
            <div className="date">April 2017</div>
          </td>
          <td className="job-details"> <br/>
            <ul>
              <li><strong>Introduced and administered Salesforce CRM</strong>; <strong>optimised configuration</strong>, <strong>supplied comprehensive training</strong> to sales teams and new starters; resolved ongoing ad hoc problems.</li>
              <li>Provided revenue and margin transparency to UK, French and exports sales teams, <strong>developing reporting that the CFO used in Board presentations</strong>. Won 80% of submitted tenders.</li>
            </ul><br/>
          </td>
        </tr>
        <tr> 
          <td className="job-details"> <br/>
            <ul>
              <li>Graduated with <strong>2:1</strong> B.A. (Hons), in Economics, Politics & International Relations</li>
            </ul><br/>
          </td>
          <td className="timeline"> 
            <div className="date">May 2015</div>
          </td>
          <td> 
            <ul> 
              <li className="company">Oxford Brooked University</li>
              <li className="role">Student</li>
              <li className="location">Oxford</li>
            </ul>
          </td>
        </tr>
        <tr> 
          <td> 
            <ul> 
              <li className="company">Transport for London</li>
              <li className="role">Year in Industry - Project Manager</li>
              <li className="location">London </li>
            </ul>
          </td>
          <td className="timeline"> 
            <div className="date">Sept 2014</div>
          </td>
          <td className="job-details"> <br/>
            <ul>
              <li>Worked closely with senior Project Managers on the largest London Underground construction project, a £60M depot upgrade.</li>
              <li>Organised workflow of staff, sourced key contractors, managed closure of the location and delivered all major contractual requirements against a hard deadline.</li>
            </ul><br/>
          </td>
        </tr>
        <tr> 
          <td className="job-details"> <br/>
            <ul>
              <li>A-Levels: Economics (A), History (C), Maths (A)</li>
              <li>GCSE’s: 11 (A*-2: A-8; C-1) of which Maths (A*) English Literature (A) & English Language (A)</li>
            </ul><br/>
          </td>
          <td className="timeline"> 
            <div className="date">May 2011</div>
          </td>
          <td> 
            <ul> 
              <li className="company">Sidcot School</li>
              <li className="role">Student</li>
              <li className="location">North Somerset </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  )
}