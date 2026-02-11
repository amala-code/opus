// // ProjectsHero.jsx — compact hero-section project showcase
// // White & blue theme · Replace your old ProjectsShowcase with this
// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";

// const projectsData = [
//   {
//     id: "proj-001",
//     label: "CHIMNEY",
//     heading: "Amruta Herbals",
//     subtitle: "Industrial Chimney System",
//     description:
//       "30-meter industrial chimney with precision engineering, structural calculations, and safety compliance for pharmaceutical manufacturing.",
//     background: "/Images/wh1.png",
//     location: "Madhya Pradesh",
//     duration: "8 weeks",
//     status: "Completed",
//     highlights: ["30m Height", "Emission Control", "Safety Certified"],
//   },
//   {
//     id: "proj-002",
//     label: "PEB",
//     heading: "Ayursatva",
//     subtitle: "Pre-Engineered Building Complex",
//     description:
//       "50-ton PEB structure with complete structural framework, roofing systems, and industrial-grade construction for manufacturing.",
//     background: "/Images/wh7.jpeg",
//     location: "Indore",
//     duration: "10 weeks",
//     status: "Completed",
//     highlights: ["50 Ton Steel", "Pre-Engineered", "Quick Assembly"],
//   },
//   {
//     id: "proj-003",
//     label: "MULTI-PHASE",
//     heading: "CMYK Laticrete",
//     subtitle: "Comprehensive Industrial Solutions",
//     description:
//       "Multi-phase project including 65-ton PEB, mezzanine structures, 60m³ silo cone fabrication, and complete pipeline systems.",
//     background: "/Images/wh3.png",
//     location: "Indore",
//     duration: "16 weeks",
//     status: "Completed",
//     highlights: ["65T PEB", "60m³ Silo", "Material Handling"],
//   },
//   {
//     id: "proj-004",
//     label: "CHEMICAL",
//     heading: "Angeloak Chemtech",
//     subtitle: "Complete Plant Setup",
//     description:
//       "End-to-end fabrication including MS factory structures, SS tanks, PEB warehouse, and heat exchangers for chemical processing.",
//     background: "/Images/wh1.png",
//     location: "Gujarat",
//     duration: "20 weeks",
//     status: "In Progress",
//     highlights: ["SS Exchangers", "Chemical Tanks", "Full Plant"],
//   },
// ];

// /* ── inline styles ─────────────────────────────────────── */
// const c = {
//   blue: "#1a56db",
//   blueDark: "#1040a0",
//   blueLight: "#e8effc",
//   bluePale: "#f4f7fe",
//   white: "#ffffff",
//   gray100: "#f8f9fb",
//   gray300: "#d1d5db",
//   gray500: "#6b7280",
//   gray800: "#1f2937",
// };

// const ProjectsHero = () => {
//   const [active, setActive] = useState(0);
//   const [fade, setFade] = useState(true);
//   const navigate = useNavigate();
//   const intervalRef = useRef(null);

//   const project = projectsData[active];

//   // auto-rotate
//   useEffect(() => {
//     intervalRef.current = setInterval(() => {
//       setFade(false);
//       setTimeout(() => {
//         setActive((p) => (p + 1) % projectsData.length);
//         setFade(true);
//       }, 300);
//     }, 5000);
//     return () => clearInterval(intervalRef.current);
//   }, []);

//   const pick = (i) => {
//     clearInterval(intervalRef.current);
//     setFade(false);
//     setTimeout(() => {
//       setActive(i);
//       setFade(true);
//     }, 200);
//   };

//   return (
//     <section style={styles.section}>
//       {/* subtle grid pattern */}
//       <div style={styles.gridBg} />

//       <div style={styles.inner}>
//         {/* ── left: text ── */}
//         <div style={{ ...styles.left, opacity: fade ? 1 : 0, transform: fade ? "translateY(0)" : "translateY(12px)" }}>
//           <div style={styles.badge}>
//             <span style={styles.badgeDot} />
//             Our Projects
//           </div>

//           <h1 style={styles.heading}>
//             {project.heading}
//             <span style={styles.subtitle}>{project.subtitle}</span>
//           </h1>

//           <p style={styles.desc}>{project.description}</p>

//           {/* meta row */}
//           <div style={styles.metaRow}>
//             <span style={styles.metaChip}>📍 {project.location}</span>
//             <span style={styles.metaChip}>⏱ {project.duration}</span>
//             <span style={{ ...styles.statusChip, background: project.status === "Completed" ? "#dcfce7" : "#fef3c7", color: project.status === "Completed" ? "#166534" : "#92400e" }}>
//               {project.status}
//             </span>
//           </div>

//           {/* highlights */}
//           <div style={styles.highlights}>
//             {project.highlights.map((h, i) => (
//               <span key={i} style={styles.highlightTag}>
//                 {h}
//               </span>
//             ))}
//           </div>

//           <button style={styles.cta} onClick={() => navigate("/contact")}
//             onMouseEnter={(e) => { e.currentTarget.style.background = c.blueDark; e.currentTarget.style.transform = "translateY(-2px)"; }}
//             onMouseLeave={(e) => { e.currentTarget.style.background = c.blue; e.currentTarget.style.transform = "translateY(0)"; }}
//           >
//             Discuss Your Project →
//           </button>
//         </div>

//         {/* ── right: image card ── */}
//         <div style={styles.right}>
//           <div style={{ ...styles.imageCard, opacity: fade ? 1 : 0, transform: fade ? "scale(1)" : "scale(0.97)" }}>
//             <img src={project.background} alt={project.heading} style={styles.img} />
//             <div style={styles.imageOverlay}>
//               <span style={styles.overlayLabel}>{project.label}</span>
//             </div>
//           </div>

//           {/* tab dots */}
//           <div style={styles.dots}>
//             {projectsData.map((p, i) => (
//               <button key={p.id} onClick={() => pick(i)}
//                 style={{ ...styles.dot, ...(active === i ? styles.dotActive : {}) }}
//               >
//                 <span style={styles.dotLabel}>{p.label}</span>
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// /* ── style objects ─────────────────────────────────────── */
// const styles = {
//   section: {
//     position: "relative",
//     width: "100%",
//     minHeight: "520px",
//     background: `linear-gradient(135deg, ${c.white} 0%, ${c.bluePale} 100%)`,
//     overflow: "hidden",
//     padding: "60px 24px 48px",
//     boxSizing: "border-box",
//     fontFamily: "'Outfit', 'Segoe UI', sans-serif",
//   },
//   gridBg: {
//     position: "absolute",
//     inset: 0,
//     backgroundImage: `radial-gradient(${c.gray300}44 1px, transparent 1px)`,
//     backgroundSize: "28px 28px",
//     pointerEvents: "none",
//   },
//   inner: {
//     position: "relative",
//     maxWidth: "1140px",
//     margin: "0 auto",
//     display: "flex",
//     gap: "48px",
//     alignItems: "center",
//     flexWrap: "wrap",
//   },
//   /* left */
//   left: {
//     flex: "1 1 420px",
//     transition: "opacity .35s ease, transform .35s ease",
//   },
//   badge: {
//     display: "inline-flex",
//     alignItems: "center",
//     gap: "8px",
//     fontSize: "12px",
//     fontWeight: 600,
//     letterSpacing: "1.2px",
//     textTransform: "uppercase",
//     color: c.blue,
//     marginBottom: "16px",
//   },
//   badgeDot: {
//     width: 8,
//     height: 8,
//     borderRadius: "50%",
//     background: c.blue,
//     display: "inline-block",
//   },
//   heading: {
//     fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
//     fontWeight: 700,
//     color: c.gray800,
//     lineHeight: 1.2,
//     margin: "0 0 12px",
//     display: "flex",
//     flexDirection: "column",
//   },
//   subtitle: {
//     fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
//     fontWeight: 400,
//     color: c.blue,
//     marginTop: "4px",
//   },
//   desc: {
//     fontSize: "0.93rem",
//     lineHeight: 1.65,
//     color: c.gray500,
//     margin: "0 0 18px",
//     maxWidth: "500px",
//   },
//   metaRow: {
//     display: "flex",
//     flexWrap: "wrap",
//     gap: "8px",
//     marginBottom: "16px",
//   },
//   metaChip: {
//     fontSize: "0.8rem",
//     padding: "4px 12px",
//     borderRadius: "20px",
//     background: c.blueLight,
//     color: c.blueDark,
//     fontWeight: 500,
//   },
//   statusChip: {
//     fontSize: "0.8rem",
//     padding: "4px 12px",
//     borderRadius: "20px",
//     fontWeight: 600,
//   },
//   highlights: {
//     display: "flex",
//     flexWrap: "wrap",
//     gap: "6px",
//     marginBottom: "24px",
//   },
//   highlightTag: {
//     fontSize: "0.75rem",
//     padding: "3px 10px",
//     borderRadius: "4px",
//     border: `1px solid ${c.blue}33`,
//     color: c.blue,
//     fontWeight: 500,
//     background: c.white,
//   },
//   cta: {
//     display: "inline-flex",
//     alignItems: "center",
//     gap: "8px",
//     padding: "12px 28px",
//     fontSize: "0.9rem",
//     fontWeight: 600,
//     color: c.white,
//     background: c.blue,
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer",
//     transition: "all .2s ease",
//     boxShadow: "0 4px 14px rgba(26,86,219,.3)",
//   },
//   /* right */
//   right: {
//     flex: "1 1 360px",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     gap: "20px",
//   },
//   imageCard: {
//     position: "relative",
//     width: "100%",
//     maxWidth: "440px",
//     aspectRatio: "4/3",
//     borderRadius: "16px",
//     overflow: "hidden",
//     boxShadow: "0 12px 40px rgba(26,86,219,.15)",
//     transition: "opacity .4s ease, transform .4s ease",
//   },
//   img: {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//     display: "block",
//   },
//   imageOverlay: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     padding: "32px 16px 14px",
//     background: "linear-gradient(transparent, rgba(0,0,0,.55))",
//   },
//   overlayLabel: {
//     fontSize: "0.75rem",
//     fontWeight: 700,
//     letterSpacing: "1.5px",
//     color: c.white,
//     textTransform: "uppercase",
//   },
//   dots: {
//     display: "flex",
//     gap: "6px",
//   },
//   dot: {
//     padding: "6px 14px",
//     fontSize: "0.7rem",
//     fontWeight: 600,
//     letterSpacing: "0.8px",
//     border: `1.5px solid ${c.gray300}`,
//     borderRadius: "20px",
//     background: c.white,
//     color: c.gray500,
//     cursor: "pointer",
//     transition: "all .2s ease",
//   },
//   dotActive: {
//     borderColor: c.blue,
//     background: c.blueLight,
//     color: c.blue,
//   },
//   dotLabel: {},
// };

// export default ProjectsHero;

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";

/* ═══════════════════════════════════════════════════════
   PROJECT DATA
   ═══════════════════════════════════════════════════════ */
const projectsData = [
  {
    id: "proj-001",
    num: "01",
    label: "CHIMNEY FABRICATION",
    heading: "Amruta Herbals",
    subtitle: "Industrial Chimney System",
    description:
      "30-meter industrial chimney with precision engineering, structural calculations, and safety compliance for pharmaceutical manufacturing.",
    background: "/Images/wh1.png",
    location: "Madhya Pradesh",
    duration: "8 Weeks",
    status: "Completed",
    tonnage: "30m",
    tonnageLabel: "Height",
    highlights: ["Emission Control", "Safety Certified", "Weather Resistant"],
  },
  {
    id: "proj-002",
    num: "02",
    label: "PEB STRUCTURE",
    heading: "Ayursatva",
    subtitle: "Pre-Engineered Building",
    description:
      "50-ton PEB structure with complete structural framework, roofing systems, and industrial-grade construction for manufacturing.",
    background: "/Images/wh7.jpeg",
    location: "Indore",
    duration: "10 Weeks",
    status: "Completed",
    tonnage: "50T",
    tonnageLabel: "Steel",
    highlights: ["Pre-Engineered", "Quick Assembly", "Cost Effective"],
  },
  {
    id: "proj-003",
    num: "03",
    label: "MULTI-PHASE",
    heading: "CMYK Laticrete",
    subtitle: "Industrial Solutions",
    description:
      "Multi-phase project — 65-ton PEB, mezzanine structures, 60m³ silo cone fabrication, and complete pipeline systems.",
    background: "/Images/wh3.png",
    location: "Indore",
    duration: "16 Weeks",
    status: "Completed",
    tonnage: "65T",
    tonnageLabel: "PEB",
    highlights: ["60m³ Silo", "Material Handling", "Mezzanine"],
  },
  {
    id: "proj-004",
    num: "04",
    label: "CHEMICAL PLANT",
    heading: "Angeloak Chemtech",
    subtitle: "Complete Plant Setup",
    description:
      "End-to-end fabrication — MS factory structures, SS tanks, PEB warehouse, and heat exchangers for chemical processing.",
    background: "/Images/wh1.png",
    location: "Gujarat",
    duration: "20 Weeks",
    status: "In Progress",
    tonnage: "Full",
    tonnageLabel: "Plant",
    highlights: ["SS Exchangers", "Chemical Tanks", "PEB Warehouse"],
  },
];

/* ═══════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════ */
const ProjectsHero = () => {
  const [active, setActive] = useState(0);
  const [animState, setAnimState] = useState("in");
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  const timerRef = useRef(null);
  const progressRef = useRef(null);

  const DURATION = 6000;
  const project = projectsData[active];

  const goTo = useCallback(
    (i) => {
      if (i === active) return;
      setAnimState("out");
      setTimeout(() => {
        setActive(i);
        setProgress(0);
        setAnimState("in");
      }, 350);
    },
    [active]
  );

  useEffect(() => {
    clearInterval(timerRef.current);
    clearInterval(progressRef.current);
    const start = Date.now();
    progressRef.current = setInterval(() => {
      setProgress(Math.min((Date.now() - start) / DURATION, 1));
    }, 30);
    timerRef.current = setTimeout(() => {
      goTo((active + 1) % projectsData.length);
    }, DURATION);
    return () => {
      clearTimeout(timerRef.current);
      clearInterval(progressRef.current);
    };
  }, [active, goTo]);

  const pick = (i) => {
    clearTimeout(timerRef.current);
    clearInterval(progressRef.current);
    setProgress(0);
    goTo(i);
  };

  const isIn = animState === "in";

  return (
    <>
      <style>{cssText}</style>
      <section className="ph-section">
                        <div className="testimonial-header">
           
                        <h2 className="section-title">
                    Our Featured 
                    <span className="title-highlight"> Projects </span>
                  </h2>

                  <div className="title-underline"></div>
                  </div>
        <div className="ph-grid-pattern" />
        <div className="ph-gradient-orb ph-orb-1" />
        <div className="ph-gradient-orb ph-orb-2" />
        <div className="ph-corner-accent ph-corner-tl" />
        <div className="ph-corner-accent ph-corner-br" />

        <div className="ph-inner">
          {/* LEFT */}
          <div className="ph-left">
            <div className={`ph-section-label ${isIn ? "ph-anim-in" : "ph-anim-out"}`}>
              <span className="ph-label-line" />
              <span className="ph-label-text">Featured Projects</span>
              <span className="ph-label-counter">
                {project.num}
                <span className="ph-label-total"> / 0{projectsData.length}</span>
              </span>
            </div>

            <h1
              className={`ph-heading ${isIn ? "ph-anim-in" : "ph-anim-out"}`}
              style={{ animationDelay: "0.08s" }}
            >
              {project.heading}
            </h1>
            <p
              className={`ph-subtitle ${isIn ? "ph-anim-in" : "ph-anim-out"}`}
              style={{ animationDelay: "0.14s" }}
            >
              {project.subtitle}
            </p>

            <p
              className={`ph-desc ${isIn ? "ph-anim-in" : "ph-anim-out"}`}
              style={{ animationDelay: "0.2s" }}
            >
              {project.description}
            </p>

            <div
              className={`ph-meta ${isIn ? "ph-anim-in" : "ph-anim-out"}`}
              style={{ animationDelay: "0.26s" }}
            >
              <span className="ph-chip ph-chip-loc">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {project.location}
              </span>
              <span className="ph-chip">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {project.duration}
              </span>
              <span
                className={`ph-chip ph-chip-status ${
                  project.status === "Completed" ? "ph-status-done" : "ph-status-wip"
                }`}
              >
                <span className="ph-status-dot" />
                {project.status}
              </span>
            </div>

            <div
              className={`ph-highlights ${isIn ? "ph-anim-in" : "ph-anim-out"}`}
              style={{ animationDelay: "0.32s" }}
            >
              {project.highlights.map((h, i) => (
                <span key={i} className="ph-tag">
                  {h}
                </span>
              ))}
            </div>

            <button
              className={`ph-cta ${isIn ? "ph-anim-in" : "ph-anim-out"}`}
              style={{ animationDelay: "0.38s" }}
              onClick={() => navigate("/contact")}
            >
              <span className="ph-cta-text">Discuss Your Project</span>
              <span className="ph-cta-arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </button>
          </div>

          {/* RIGHT */}
          <div className="ph-right">
            <div className={`ph-image-wrap ${isIn ? "ph-img-in" : "ph-img-out"}`}>
              <img src={project.background} alt={project.heading} className="ph-image" />
              <div className="ph-image-overlay" />
              <div className="ph-tonnage">
                <span className="ph-tonnage-num">{project.tonnage}</span>
                <span className="ph-tonnage-label">{project.tonnageLabel}</span>
              </div>
              <div className="ph-ribbon">{project.label}</div>
            </div>

            <div className="ph-nav">
              {projectsData.map((p, i) => (
                <button
                  key={p.id}
                  className={`ph-nav-btn ${active === i ? "ph-nav-active" : ""}`}
                  onClick={() => pick(i)}
                >
                  <span className="ph-nav-num">{p.num}</span>
                  <span className="ph-nav-label">{p.label}</span>
                  {active === i && (
                    <span
                      className="ph-nav-progress"
                      style={{ transform: `scaleX(${progress})` }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

/* ═══════════════════════════════════════════════════════
   CSS
   ═══════════════════════════════════════════════════════ */
const cssText = `

.ph-section {
  position: relative;
  width: 100%;
  min-height: 600px;
  background: linear-gradient(165deg, #ffffff 0%, #f0f5ff 40%, #e0eafc 100%);
  overflow: hidden;
  padding: 64px 28px 52px;
  box-sizing: border-box;
  font-family: 'DM Sans', sans-serif;
}

.ph-grid-pattern {
  position: absolute; inset: 0;
  background-image: radial-gradient(circle, #1a56db0d 1.2px, transparent 1.2px);
  background-size: 32px 32px;
  pointer-events: none;
}

.ph-gradient-orb {
  position: absolute; border-radius: 50%;
  filter: blur(80px); pointer-events: none; opacity: 0.35;
}
.ph-orb-1 {
  width: 420px; height: 420px;
  background: radial-gradient(circle, #1a56db44, transparent 70%);
  top: -120px; right: -80px;
  animation: ph-float 8s ease-in-out infinite;
}
.ph-orb-2 {
  width: 300px; height: 300px;
  background: radial-gradient(circle, #3b82f633, transparent 70%);
  bottom: -60px; left: -40px;
  animation: ph-float 10s ease-in-out infinite reverse;
}
@keyframes ph-float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(20px, -25px); }
}

.ph-corner-accent {
  position: absolute; width: 80px; height: 80px; pointer-events: none;
}
.ph-corner-tl {
  top: 20px; left: 20px;
  border-top: 2px solid #1a56db1a; border-left: 2px solid #1a56db1a;
}
.ph-corner-br {
  bottom: 20px; right: 20px;
  border-bottom: 2px solid #1a56db1a; border-right: 2px solid #1a56db1a;
}

.ph-inner {
  position: relative; max-width: 1180px; margin: 0 auto;
  display: flex; gap: 56px; align-items: center;
}
.ph-left { flex: 1 1 440px; min-width: 0; }
.ph-right { flex: 1 1 400px; min-width: 0; display: flex; flex-direction: column; gap: 24px; align-items: center; }

@keyframes ph-slide-in {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes ph-slide-out {
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(-10px); }
}
.ph-anim-in  { animation: ph-slide-in  0.5s cubic-bezier(0.22,1,0.36,1) both; }
.ph-anim-out { animation: ph-slide-out 0.3s cubic-bezier(0.55,0,1,0.45) both; }

.ph-section-label {
  display: flex; align-items: center; gap: 12px; margin-bottom: 20px;
}
.ph-label-line {
  width: 36px; height: 2px;
  background: linear-gradient(90deg, #1a56db, #3b82f6);
  border-radius: 2px;
}
.ph-label-text {
  font-size: 0.75rem; font-weight: 700;
  letter-spacing: 2.5px; text-transform: uppercase; color: #1a56db;
}
.ph-label-counter {
  font-size: 0.85rem; font-weight: 700; color: #1e3a5f;
  font-variant-numeric: tabular-nums;
}
.ph-label-total { color: #94a3b8; font-weight: 400; }

.ph-heading {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 800; color: #0f172a;
  line-height: 1.1; margin: 0; letter-spacing: -0.02em;
}
.ph-subtitle {
  font-size: clamp(0.95rem, 1.5vw, 1.1rem);
  font-weight: 500; color: #1a56db;
  margin: 6px 0 16px; letter-spacing: 0.01em;
}

.ph-desc {
  font-size: 0.9rem; line-height: 1.7; color: #475569;
  margin: 0 0 20px; max-width: 480px;
}

.ph-meta { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
.ph-chip {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 0.78rem; font-weight: 500;
  padding: 5px 14px; border-radius: 100px;
  background: #ffffff; color: #1e40af;
  border: 1px solid #dbeafe;
  box-shadow: 0 1px 3px rgba(26,86,219,0.06);
}
.ph-chip-loc { color: #334155; }
.ph-chip-status { gap: 5px; }
.ph-status-dot { width: 6px; height: 6px; border-radius: 50%; }
.ph-status-done { color: #166534; border-color: #bbf7d0; background: #f0fdf4; }
.ph-status-done .ph-status-dot { background: #16a34a; box-shadow: 0 0 6px #16a34a66; }
.ph-status-wip  { color: #92400e; border-color: #fde68a; background: #fffbeb; }
.ph-status-wip .ph-status-dot { background: #f59e0b; box-shadow: 0 0 6px #f59e0b66; animation: ph-pulse 1.5s infinite; }
@keyframes ph-pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }

.ph-highlights { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 28px; }
.ph-tag {
  font-size: 0.72rem; font-weight: 600; letter-spacing: 0.5px;
  padding: 4px 12px; border-radius: 4px;
  background: linear-gradient(135deg, #eff6ff, #dbeafe);
  color: #1e40af; border: 1px solid #bfdbfe55;
}

.ph-cta {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 14px 32px; font-size: 0.88rem; font-weight: 600;
  font-family: 'DM Sans', sans-serif; color: #fff;
  background: linear-gradient(135deg, #1a56db, #2563eb);
  border: none; border-radius: 12px; cursor: pointer;
  position: relative; overflow: hidden;
  transition: transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s ease;
  box-shadow: 0 4px 20px rgba(26,86,219,0.3), inset 0 1px 0 rgba(255,255,255,0.15);
}
.ph-cta::before {
  content:''; position: absolute; inset: 0;
  background: linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.12) 100%);
  pointer-events: none;
}
.ph-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(26,86,219,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
}
.ph-cta:active { transform: translateY(0); }
.ph-cta-arrow { display: flex; transition: transform 0.3s ease; }
.ph-cta:hover .ph-cta-arrow { transform: translateX(4px); }

.ph-image-wrap {
  position: relative; width: 100%; max-width: 480px;
  aspect-ratio: 4/3; border-radius: 20px; overflow: hidden;
  box-shadow: 0 20px 60px rgba(15,23,42,0.12), 0 4px 16px rgba(26,86,219,0.08), inset 0 0 0 1px rgba(255,255,255,0.5);
}
.ph-img-in  { animation: ph-img-enter 0.6s cubic-bezier(0.22,1,0.36,1) both; }
.ph-img-out { animation: ph-img-exit  0.3s ease both; }
@keyframes ph-img-enter {
  from { opacity:0; transform: scale(0.95) translateY(12px); }
  to   { opacity:1; transform: scale(1) translateY(0); }
}
@keyframes ph-img-exit {
  from { opacity:1; transform: scale(1); }
  to   { opacity:0; transform: scale(0.97); }
}
.ph-image {
  width: 100%; height: 100%; object-fit: cover; display: block;
  transition: transform 6s ease;
}
.ph-image-wrap:hover .ph-image { transform: scale(1.05); }
.ph-image-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(180deg, transparent 40%, rgba(15,23,42,0.6) 100%);
  pointer-events: none;
}

.ph-tonnage {
  position: absolute; bottom: 16px; left: 16px;
  background: rgba(255,255,255,0.95); backdrop-filter: blur(12px);
  border-radius: 12px; padding: 10px 16px;
  display: flex; flex-direction: column; align-items: center;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  border: 1px solid rgba(26,86,219,0.1);
}
.ph-tonnage-num {
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem; font-weight: 800; color: #1a56db; line-height: 1;
}
.ph-tonnage-label {
  font-size: 0.6rem; font-weight: 700; letter-spacing: 2px;
  text-transform: uppercase; color: #64748b; margin-top: 2px;
}

.ph-ribbon {
  position: absolute; top: 16px; right: 16px;
  font-size: 0.65rem; font-weight: 700; letter-spacing: 1.8px;
  text-transform: uppercase; padding: 6px 14px; border-radius: 6px;
  background: rgba(26,86,219,0.9); backdrop-filter: blur(8px);
  color: #fff; box-shadow: 0 2px 10px rgba(26,86,219,0.3);
}

.ph-nav { display: flex; gap: 6px; flex-wrap: wrap; justify-content: center; }
.ph-nav-btn {
  position: relative; display: flex; align-items: center; gap: 6px;
  padding: 8px 16px; font-size: 0.68rem; font-weight: 600;
  font-family: 'DM Sans', sans-serif; letter-spacing: 0.8px;
  text-transform: uppercase; border: 1.5px solid #e2e8f0;
  border-radius: 100px; background: #fff; color: #94a3b8;
  cursor: pointer; overflow: hidden; transition: all 0.3s ease;
}
.ph-nav-btn:hover { border-color: #93c5fd; color: #1e40af; background: #f0f5ff; }
.ph-nav-active {
  border-color: #1a56db; color: #1a56db; background: #eff6ff;
  box-shadow: 0 2px 8px rgba(26,86,219,0.12);
}
.ph-nav-num { font-variant-numeric: tabular-nums; opacity: 0.5; }
.ph-nav-active .ph-nav-num { opacity: 1; }
.ph-nav-progress {
  position: absolute; bottom: 0; left: 0;
  height: 2px; width: 100%;
  background: linear-gradient(90deg, #1a56db, #3b82f6);
  border-radius: 0 0 100px 100px; transform-origin: left;
}

@media (max-width: 860px) {
  .ph-inner { flex-direction: column; gap: 36px; text-align: center; }
  .ph-left { display: flex; flex-direction: column; align-items: center; }
  .ph-desc { max-width: 520px; }
  .ph-meta, .ph-highlights, .ph-section-label { justify-content: center; }
  .ph-image-wrap { max-width: 420px; }
}
@media (max-width: 520px) {
  .ph-section { padding: 48px 16px 40px; }
  .ph-heading { font-size: 1.6rem; }
  .ph-nav-btn { padding: 6px 10px; font-size: 0.6rem; }
  .ph-nav-label { display: none; }
  .ph-cta { padding: 12px 24px; font-size: 0.82rem; }
}
`;

export default ProjectsHero;