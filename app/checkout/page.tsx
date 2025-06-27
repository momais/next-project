"use client";

import { useState, FormEvent, useEffect } from 'react';
import { useSession } from 'next-auth/react';

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  notes?: string;
  termsAccepted: boolean;
  paymentType: string;
  subscription: string;
}

const ChevronDown = ({ open }: { open: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-5 w-5 transform transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

export default function CheckOut() {
  const { data: session, status } = useSession();
  const [accordion, setAccordion] = useState<number | null>(null);
  const [paymentAccordion, setPaymentAccordion] = useState<number | null>(1);
  const [payment, setPayment] = useState<number>(1);
  const [form, setForm] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    notes: '',
    termsAccepted: false,
    paymentType: 'cash',
    subscription: 'no',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Pre-fill form with session data
  useEffect(() => {
    if (session && session.user) {
      setForm((prev) => ({
        ...prev,
        email: session.user.email || '',
        firstName: session.user.name?.split(' ')[0] || '',
        lastName: session.user.name?.split(' ')[1] || '',
      }));
    }
  }, [session]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox' && e.target instanceof HTMLInputElement) {
      setForm((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handlePaymentToggle = (id: number) => {
    setPaymentAccordion(paymentAccordion === id ? null : id);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    try {
      if (!session || !session.user || !session.user.id) {
        setError('You must be logged in to place an order.');
        setLoading(false);
        return;
      }
      // Compose the order data for the API
      const orderData = {
        user_id: session.user.id,
        fname: form.firstName,
        lname: form.lastName,
        email: form.email,
        telephone: form.phone,
        status: 'Confirmed',
        amount: 125.75, // or your calculated amount
        reference_id: 'ref123', // set as needed or generate
        ref_id: 'ref123', // set as needed or generate
        retailer_id: 1, // set as needed
        activation: 1, // set as needed
        payment_type: form.paymentType,
        subscription: form.subscription,
      };
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });
      const result = await res.json();
      if (result.success) {
        setSuccess('Order placed successfully!');
        setForm({
          firstName: '',
          lastName: '',
          phone: '',
          email: session.user.email || '',
          notes: '',
          termsAccepted: false,
          paymentType: 'cash',
          subscription: 'no',
        });
      } else {
        setError(result.error || 'Failed to place order.');
      }
    } catch (err: any) {
      setError('An error occurred while placing the order.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="w-full overflow-hidden">
        <div
          className="absolute top-20 left-0 w-screen min-h-[250px] max-sm:min-h-[230px] bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-40"
          style={{ backgroundImage: "url('/assets/bg1.jpg')" }}
        >
          <div className="relative z-10 flex flex-col items-center justify-center h-[250px] max-sm:h-[230px] text-center text-white">
            <h1 className="mb-2.5 lg:text-5xl md:text-3xl sm:text-2.5xl text-2xl font-bold">
              Checkout
            </h1>
            <nav>
              <ul className="flex items-center justify-center space-x-2 text-lg font-base">
                <li>
                  <a href="#" className="text-white text-base font-medium">
                    Home
                  </a>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-3.5 h-3 mt-1 fill-white">
                    <path
                      d="M438.6 233.4l-192-192c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L370.7 256 201.4 425.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3z"
                      stroke="white"
                      strokeWidth="5"
                    />
                  </svg>
                </li>
                <li>
                  <a href="#" className="text-white text-base font-medium">
                    About Me
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

   <div className="mt-60">
     <div className="3xl:py-25 md:py-17 sm:py-13 py-10">
      <div className="container">
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Left: Billing Details */}
          <div className="xl:w-2/3 w-full">
            <h4 className="mb-4 font-bold text-xl">Billing details</h4>
            <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
              <div className="flex items-center space-x-4">
                <div className="md:w-1/2 w-full">
                  <div className="form-group mb-6">
                    <label className="mb-2 font-medium inline-block">First Name</label>
                    <input name="firstName" required className="w-full py-4 px-5 h-13 outline-none rounded-xl border border-black bg-white duration-500 focus:bg-light" onChange={handleChange} value={form.firstName} />
                  </div>
                </div>
                <div className="md:w-1/2 w-full">
                  <div className="form-group mb-6">
                    <label className="mb-2 font-medium inline-block">Last Name</label>
                    <input name="lastName" className="w-full py-4 px-5 h-13 outline-none rounded-xl border border-black bg-white duration-500 focus:bg-light" onChange={handleChange} value={form.lastName} />
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="form-group mb-6">
                  <label className="mb-2 font-medium inline-block">Email address *</label>
                  <input name="email" required className="w-full py-4 px-5 h-13 outline-none rounded-xl border border-black bg-white duration-500 focus:bg-light" onChange={handleChange} value={form.email} />
                </div>
              </div>
              <div className="w-full">
                <div className="form-group mb-6">
                  <label className="mb-2 font-medium inline-block">Phone *</label>
                  <input name="phone" required className="w-full py-4 px-5 h-13 outline-none rounded-xl border border-black bg-white duration-500 focus:bg-light" onChange={handleChange} value={form.phone} />
                </div>
              </div>
              <div className="w-full mb-6">
                <div className="form-group">
                  <label className="mb-2 font-medium inline-block">Order notes (optional)</label>
                  <textarea id="comments" name="notes" placeholder="Notes about your order, e.g. special notes for delivery." className="w-full py-4 px-5 h-auto outline-none rounded-xl border border-black bg-white duration-500 focus:bg-light" onChange={handleChange} value={form.notes} cols={90} rows={5} />
                </div>
              </div>
              {success && <div className="text-green-600 font-bold mb-2">{success}</div>}
              {error && <div className="text-red-600 font-bold mb-2">{error}</div>}
              <button type="submit" className="btn py-3 px-7 max-sm:px-6 text-base max-sm:text-sm block text-center font-medium leading-[1] border border-black bg-black text-white rounded-xl duration-700 relative overflow-hidden w-full">PLACE ORDER</button>
            </form>
          </div>
          {/* Right: Order Summary */}
          <div className="xl:w-1/3 w-full">
            <h4 className="mb-4 text-xl font-bold">Your Order</h4>
            <div className="p-7 max-sm:p-4 rounded-3xl border border-black sticky top-29 z-1">
              <div className="flex items-center pb-4 mb-4 border-b border-black/10">
                <div className="min-w-14 size-14 rounded-xl overflow-hidden">
                  <img src="assets/images/shop/shop-cart/pic1.jpg" alt="/" className="w-full" />
                </div>
                <div className="ml-4 w-full flex justify-between items-center">
                  <h6>Sophisticated <br />Swagger Suit</h6>
                  <span className="text-gray-600 text-base font-medium">$40.00</span>
                </div>
              </div>
              <div className="flex items-center pb-4 border-b border-black/10">
                <div className="min-w-14 size-14 rounded-xl overflow-hidden">
                    <img src="assets/images/shop/shop-cart/pic2.jpg" alt="/" className="w-full" />
                </div>
                <div className="ml-4 w-full flex justify-between items-center">
                  <h6>Cozy Knit Cardigan Sweater</h6>
                  <span className="text-gray-600 text-base font-medium">$36.00</span>
                </div>
              </div>
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-black/10">
                    <td className="py-3">Subtotal</td>
                    <td className="py-3 text-right text-gray-600 text-base font-medium">$100</td>
                  </tr>
                  <tr>
                    <td className="pt-3"><h6 className="mb-2 font-medium">Shipping</h6></td>
                    <td></td>
                  </tr>
                  <tr className="border-b border-black/10">
                    <td className="py-3">
                      <div className="custom-control custom-checkbox">
                          <input className="form-check-input radio !rounded-full bg-white !border !border-black" type="radio" name="shipping" id="flexRadioDefault1" onChange={() => setPayment(1)} checked={payment === 1} />
                          <label className="font-medium ml-2" htmlFor="flexRadioDefault1">
                        Free shipping
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox">
                          <input className="form-check-input radio !rounded-full bg-white !border !border-black" type="radio" name="shipping" id="flexRadioDefault2" onChange={() => setPayment(2)} checked={payment === 2} />
                          <label className="font-medium ml-2" htmlFor="flexRadioDefault2">
                        Flat Rate:
                        </label>
                      </div>
                    </td>
                    <td className="py-3 text-right text-gray-600 text-base font-medium">25.75</td>
                  </tr>
                  <tr className="total">
                    <td className="py-3">Total</td>
                      <td className="py-3 text-right text-gray-600 text-base font-medium">$125.75</td>
                    
                  </tr>
                </tbody>
              </table>
              
                <div id="accordionFaq1">
                <div className="overflow-hidden mb-4">
                  <div>
                    <div className="w-full">
                        <input className="form-check-input radio !rounded-full bg-white !border !border-black" type="radio" name="paymentMethod" id="flexRadioDefault3" onChange={() => setPayment(3)} checked={payment === 3} />
                        <label className="font-medium ml-2" htmlFor="flexRadioDefault3">
                        Direct bank transfer
                      </label>
                    </div>
                  </div>
                    <div className={`py-5 ${payment === 3 ? '' : 'hidden'}`}>
                      <p className="text-sm">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                  </div>
                </div>
                <div className="overflow-hidden mb-4">
                  <div>
                    <div className="w-full">
                        <input className="form-check-input radio !rounded-full bg-white !border !border-black" type="radio" name="paymentMethod" id="flexRadioDefault5" onChange={() => setPayment(4)} checked={payment === 4} />
                        <label className="font-medium ml-2" htmlFor="flexRadioDefault5">
                        Cash on delivery
                      </label>
                    </div>
                  </div>
                    <div className={`py-5 ${payment === 4 ? '' : 'hidden'}`}>
                      <p className="text-sm">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                    </div>
                </div>
                <div className="overflow-hidden mb-4">
                  <div>
                    <div className="w-full flex items-center">
                        <input className="form-check-input radio !rounded-full bg-white !border !border-black" type="radio" name="paymentMethod" id="flexRadioDefault4" onChange={() => setPayment(5)} checked={payment === 5} />
                        <label className="font-medium ml-2" htmlFor="flexRadioDefault4">
                        Paypal
                      </label>
                        <img className="mx-3" src="assets/images/shop/payment.jpg" alt="/" />
                        <a className="text-body text-sm underline" href="#">What is PayPal?</a>
                      </div>
                    </div>
                    <div className={`py-5 ${payment === 5 ? '' : 'hidden'}`}>
                      <p className="text-sm">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-5 pt-4 border-t border-gray-300 mb-4">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our
                 <a className="text-red-700 underline" href="#">privacy policy.</a></p>
              <div className="form-group">
                <div className="custom-control custom-checkbox flex mb-4">
                    <input type="checkbox" name="termsAccepted" className="form-check-input bg-white" id="basic_checkbox_3" onChange={handleChange} checked={form.termsAccepted} />
                    <label className="text-gray-600 text-sm mt-3 ml-2" htmlFor="basic_checkbox_3">I have read and agree to the website terms and conditions </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
} 
