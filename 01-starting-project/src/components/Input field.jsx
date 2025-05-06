export default function Inputfield({ onSelect, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            required
            onChange={(e) => onSelect("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            required
            onChange={(e) => onSelect("annualInvestment", e.target.value)}
            
            
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            required
            onChange={(e) => onSelect("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label>DURATION</label>
          <input
            type="number"
            value={userInput.duration}
            required
            onChange={(e) => onSelect("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
