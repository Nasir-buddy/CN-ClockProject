# Digital Clock with RGB Running Border and Alarm Feature

## 1. Project Overview

This project is a digital clock built using HTML, Tailwind CSS, and JavaScript. The clock displays the current time, including hours, minutes, seconds, and AM/PM notation. Additionally, the clock allows users to set multiple alarms with a customizable time, including seconds. An alarm list is displayed on the page, with options to delete alarms. The clock interface is enhanced with a dynamic RGB running border effect around the alarm list.

## 2. Features

- **Digital Clock**: Displays the current time with hours, minutes, seconds, and AM/PM notation.
- **Set Alarm**: Allows users to set alarms with customizable hours, minutes, and seconds.
- **Alarm List**: Displays a list of all set alarms, with the ability to delete any alarm.
- **RGB Running Border**: A visually appealing RGB running border effect around the alarm list.

## 3. Technologies Used

- **HTML**: The structure of the application.
- **Tailwind CSS**: For styling the user interface and creating the RGB running border effect.
- **JavaScript**: To handle the logic for the clock, alarm setting, and checking alarms.

## 4. How to Use

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/Nasir-buddy/CN-ClockProject
    ```

2. **Open the Project**:
    - Navigate to the project directory and open the `index.html` file in your browser.

3. **Set an Alarm**:
    - Use the time input field to set an alarm, including hours, minutes, and seconds. Click "Set Alarm" to add the alarm to the list.
    - When the current time matches a set alarm, an alert will be triggered.

4. **Manage Alarms**:
    - The set alarms are displayed in a list below the clock. You can delete any alarm by clicking the "Delete" button next to it.

## 5. Customization

### 5.1 RGB Running Border

The RGB running border effect is applied using Tailwind CSS with a custom animation. If you want to customize the speed or colors, you can modify the Tailwind configuration in the script tag inside the `index.html` file:

