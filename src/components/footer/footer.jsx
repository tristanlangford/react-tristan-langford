import React from "react";
import './footer.css'

export default function Footer() {
  return (
    <footer className="footer"> 
    <table> 
      <tbody> 
        <tr> 
          <td> <a href="/images/TRISTAN_LANGFORD_CV.pdf" download="download">
                <img className="footer-logo" src="/images/PDF-Mark3.png" alt="pdf logo"/>
              </a>
          </td>
          <td> <a href="https://github.com/tristanlangford" target="_blank" rel="noopener"><img className="footer-logo" src="/images/GitHub-Mark.png" alt="github logo"/></a></td>
          <td> <a href="https://www.linkedin.com/in/tristan-langford-61711a70/" target="_blank" rel="noopener"><img className="footer-logo" src="/images/LinkedIn-Mark.png" alt="linkedIn logo"/></a></td>
          <td> <a href="mailto:tristanlangford@hotmail.com"><img className="footer-logo" src="/images/Email-Mark.png" alt="email logo"/></a></td>
        </tr>
      </tbody>
    </table>
  </footer>
    );
}