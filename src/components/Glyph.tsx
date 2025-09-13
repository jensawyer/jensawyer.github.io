export default function Glyph({ label }: { label: string }) {
    return (
        <div className="glyph-box">
            <span className="font-mono glyph-box__text">{label}</span>
        </div>
    );
}
