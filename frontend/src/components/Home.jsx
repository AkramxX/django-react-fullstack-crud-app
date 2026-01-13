import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Chip,
  IconButton,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import { MaterialReactTable } from "material-react-table";
import AxiosInstance from "./Axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, useSearchParams } from "react-router";

const Home = () => {
  const [myData, setMyData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = () => {
      AxiosInstance.get("footballclubs/").then((res) => {
        setMyData(res.data);
      });
    };
    fetchData();
  }, []);

  useEffect(() => {
    const country = searchParams.get("country");
    if (country) {
      setFilteredData(
        myData.filter((club) => club.country_details.name === country)
      );
    } else {
      setFilteredData(myData);
    }
  }, [searchParams, myData]);

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "country_details.name",
        header: "Country",
      },
      {
        accessorKey: "league_details.name",
        header: "League",
      },
      {
        accessorKey: "city",
        header: "City",
      },
      {
        accessorKey: "attendance",
        header: "Attendance",
      },
      {
        accessorKey: "characteristics_names",
        header: "Characteristics",
        Cell: ({ cell }) => (
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {cell.getValue()?.map((char, index) => (
              <Chip key={index} label={char} />
            ))}
          </div>
        ),
      },
    ],
    []
  );

  const handleDelete = (id) => {
    AxiosInstance.delete(`footballclubs/${id}/`).then(() => {
      setOpenDialog(false);
    });
  };

  return (
    <div>
      <Box className={"TopBar"}>
        <CalendarViewMonthIcon />
        <Typography
          sx={{ marginLeft: "15px", fontWeight: "bold" }}
          variant="subtitle2"
        >
          View all clubs!
        </Typography>
      </Box>

      <MaterialReactTable
        columns={columns}
        data={filteredData}
        enableRowActions={true}
        renderRowActions={({ row }) => (
          <Box sx={{ display: "flex", flexWrap: "nowrap", gap: "5px" }}>
            <IconButton
              color="primary"
              component={Link}
              to={`edit/${row.original.id}`}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              color="error"
              onClick={() => {
                setSelectedId(row.original.id);
                setOpenDialog(true);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        )}
      />

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this club?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleDelete(selectedId)} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Home;
