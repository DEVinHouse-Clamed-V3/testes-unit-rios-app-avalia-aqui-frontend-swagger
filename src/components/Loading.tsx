import { ActivityIndicator } from "react-native";

type LoadingProps = {
    size: "small" | "large";
    color: string;
}

export default function Loading({ size, color }: LoadingProps) {
    return (
        <ActivityIndicator size={size} color={color} />
    );
}