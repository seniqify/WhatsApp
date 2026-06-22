// Decorative floating dots. Fixed positions => identical on server & client.
const dots = [
  { x: "8%", y: "22%", s: 5, d: "0s" },
  { x: "16%", y: "68%", s: 3, d: "1.2s" },
  { x: "27%", y: "40%", s: 4, d: "2.4s" },
  { x: "39%", y: "82%", s: 3, d: "0.6s" },
  { x: "47%", y: "16%", s: 6, d: "3.1s" },
  { x: "58%", y: "60%", s: 4, d: "1.8s" },
  { x: "64%", y: "30%", s: 3, d: "2.9s" },
  { x: "72%", y: "78%", s: 5, d: "0.4s" },
  { x: "81%", y: "44%", s: 4, d: "2.1s" },
  { x: "88%", y: "20%", s: 3, d: "3.6s" },
  { x: "93%", y: "66%", s: 5, d: "1.0s" },
  { x: "34%", y: "12%", s: 3, d: "4.0s" },
  { x: "52%", y: "88%", s: 4, d: "2.6s" },
  { x: "76%", y: "12%", s: 3, d: "1.5s" },
  { x: "12%", y: "48%", s: 4, d: "3.3s" },
];

export default function Particles() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((p, i) => (
        <span
          key={i}
          className="twinkle absolute rounded-full"
          style={{
            left: p.x,
            top: p.y,
            width: p.s,
            height: p.s,
            animationDelay: p.d,
            backgroundColor: "var(--brand, #25d366)",
            boxShadow: "0 0 8px 1px var(--brand, #25d366)",
          }}
        />
      ))}
    </div>
  );
}
