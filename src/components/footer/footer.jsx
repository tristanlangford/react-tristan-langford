import React from "react";
import './footer.css'

export default function Footer() {
  return (
    <footer class="footer"> 
    <table> 
      <tbody> 
        <tr> 
          <td> <a href="/images/TRISTAN_LANGFORD_CV.pdf" download="download"><img class="footer-logo" src="/images/PDF-Mark3.png"/></a></td>
          <td> <a href="https://github.com/tristanlangford"><img class="footer-logo" src="/images/GitHub-Mark.png"/></a></td>
          <td> <a href="https://www.linkedin.com/in/tristan-langford-61711a70/"><img class="footer-logo" src="/images/LinkedIn-Mark.png"/></a></td>
          <td> <a href="mailto:tristanlangford@hotmail.com"><img class="footer-logo" src="/images/Email-Mark.png"/></a></td>
        </tr>
      </tbody>
    </table>
  </footer>
    );
}