import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
const availableTimes = ['10:00 AM', '11:00 AM', '12:00 PM'];
test('Renders the "Number of guests" wlabel in BookingForm', async () => {
    render(<BookingForm availableTimes={availableTimes}/>);

    console.log(screen.debug());

    const guestLabel = screen.getByLabelText(/Number of guests/);

    expect(guestLabel).toBeInTheDocument();
    expect(guestLabel).toHaveValue(1);
});


test('Attributes are applied correctly to form input fields', () => {
    render(<BookingForm availableTimes={availableTimes} />);

    const nameInput = screen.getByLabelText("Name");
    expect(nameInput).toHaveAttribute("type", "text");
    expect(nameInput).toHaveAttribute("id", "name");
    expect(nameInput).toHaveAttribute("name", "name");
    expect(nameInput).toHaveAttribute("aria-label", "Enter Name");
    expect(nameInput).toHaveAttribute("aria-required", "true");
    expect(nameInput).toBeRequired();

  });


test('Error message displayed when name field is empty and button disabled',async () => {
    render(<BookingForm availableTimes={availableTimes} />);

    const nameInput = screen.getByLabelText('Name');

    fireEvent.change(nameInput, { target: { value: '' } });
    fireEvent.blur(nameInput);

    const submitButton = screen.getByText('Make Your reservation');
    const errorMessage = await screen.findByText(/Name is required*/i);

    expect(errorMessage).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
});
