# Job Filter App

This is a **React** application that displays a list of job opportunities, allowing the user to select multiple filter criteria. The user is also able to remove individual filters or clear all selected filters.

---
This project utilizes:
- **React hooks**, namely useState and useEffect. A filter object is stored as state, and whenever a user selects a filter option, the filter object is updated; all filter selections are stored within the filter object.
- Whenever the filter object is updated, a complex implementation of the **filter array method** is utilized to compare initial listing data to the filter object.
