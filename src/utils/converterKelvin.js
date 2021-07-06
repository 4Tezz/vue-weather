export default function converterKelvin(val) {
    return `+${(val - 273).toFixed()}`
}