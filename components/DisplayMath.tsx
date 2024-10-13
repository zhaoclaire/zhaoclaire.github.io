import Math from "./Math";

export default function DisplayMath({latex}: {latex: string}) {
    return <Math latex={latex} display={true} />
}