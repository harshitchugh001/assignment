# Micro-service for Summary Statistics

This micro-service provides functionality to derive summary statistics (mean, min, max) on a dataset. It includes APIs to add, delete, and fetch summary statistics for the dataset.

## Installation

1. Clone the repository:

git clone https://github.com/harshitchugh001/assignment

2. Navigate to the project directory:

cd <project_directory>


3. Install dependencies:

npm install

## Running the Service

To start the micro-service, run the following command:

npm start



The service will start running on port 8000 by default.

## API Endpoints

### 1. Add a New Record

- **Endpoint**: `POST /api/addrecord`
- **Description**: Add a new record to the dataset.
- **Request Body**:
  ```json
  {
    "name": "John",
    "salary": 100000,
    "currency": "USD",
    "department": "Engineering",
    "sub_department": "Platform",
    "on_contract": true
  }


  2. Delete a Record
- **Endpoint**: POST /api/deleterecord
-**Description**: Delete a record from the dataset.
-**Request Body**:
{
  "index": 0
}

3. Fetch Summary Statistics for Entire Dataset
-**Endpoint**: GET /api/getstats
-**Description**: Retrieve summary statistics for the entire dataset.

4. Fetch Summary Statistics for Records on Contract
-**Endpoint**: GET /api/calculateContractSalaryStats
-**Description**: Retrieve summary statistics for records on contract.


5. Fetch Summary Statistics for Records on Contract
-**Endpoint**: GET /api/calculateContractSalaryStats
-**Description**: Retrieve summary statistics for records on contract.


6. Fetch Summary Statistics for Each Department and Sub-Department Combination
-**Endpoint**: GET /api/fetchSalarySumByDepartmentAndSubDepartmentStats
-**Description**: Retrieve summary statistics for each department and sub-department combination.





