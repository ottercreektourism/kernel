import "../App.css";
import Calendar from "../components/Calendar";
import css from './gridPage.css'

function GridPage() {
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var day = today.getDate();

  console.log(date)
  return (
    <div className="grid">
      <div className="mx-auto mt-4 mb-4">
        <h3>Welcome to your Grid</h3>{" "}
      </div>
      <div className="mx-auto mt-4">
        <h5>Click on the grid squares to see your daily results.</h5>{" "}
      </div>

      <Calendar
        month={month}
        year={year}
        preloadedEvents={[
          {
            id: 1,
            name: "Holiday",
            dateFrom: "2021-09-29T12:00",
            dateTo: "2021-10-03T08:45",
            type: "Holiday"
          },
          {
            id: 2,
            name: "Meeting",
            dateFrom: "2021-10-01T09:45",
            dateTo: "2021-10-04T22:00",
            type: "Standard"
          },
          {
            id: 3,
            name: "Away",
            dateFrom: "2021-10-01T01:00",
            dateTo: "2021-10-01T23:59",
            type: "Busy"
          },
          {
            id: 4,
            name: "Inspection",
            dateFrom: "2021-10-19T07:30",
            dateTo: "2021-10-21T23:59",
            type: "Standard"
          },
          {
            id: 5,
            name: "Holiday - Greece",
            dateFrom: "2021-10-14T08:00",
            dateTo: "2021-10-16T23:59",
            type: "Holiday"
          },
          {
            id: 6,
            name: "Holiday - Spain",
            dateFrom: "2021-10-29T08:00",
            dateTo: "2021-10-31T23:59",
            type: "Holiday"
          }
        ]}
      />
    </div>
  );
};

export default GridPage;
