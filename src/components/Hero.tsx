export default function Hero() {
    return (
        <section id="home" className="section">
            <div className="container">
                <div className="glass-card hero">
                    <h1 className="hero-title">
                        Where others see chaos, I build clarity
                        <br/>
                        <span className="hero-accent"> in software and in people.</span>
                    </h1>
                    <p className="hero-subtitle">
                        I bridge research, engineering, and leadership to turn complex ideas into working systems.
                    </p>
                    <div className="hero-actions">
                        <a className="btn btn-primary" href="#projects">View Projects</a>
                        <a className="btn btn-outline" href="#contact">Contact</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
