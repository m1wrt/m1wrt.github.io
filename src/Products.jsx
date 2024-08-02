import { Paper } from "@mui/material";

export default function Product(){

        const Img = styled("img")({
                width: 200,
                height: "100%",
                objectFit: "cover",
                objectPosition: "center"
            })
    
    return <Paper
    sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        overflow: "hidden",
        mt: 5
    }}>
        <Img
            src="https://via.placeholder.com/300"
        />
        asd</Paper>
}