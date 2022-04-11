import { Statistic } from "semantic-ui-react";

export default function DisplayBalance({title, value, size="small", color="normal"}){
    return (
    <Statistic size={size} color={color}>
        <Statistic.Label>{title}:</Statistic.Label>
        <Statistic.Value>{value}</Statistic.Value>
    </Statistic>);
}