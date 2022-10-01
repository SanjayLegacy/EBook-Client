import React from 'react';

interface BtnPropsWithChildren { }

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, BtnPropsWithChildren {
  block?: boolean;
  children: React.ReactNode;
  className?: string;
  color?: 'primary' | 'plain' | 'success' | 'danger' | 'warning' | 'indigo' | 'dark' | 'category' | 'userProfileCategory' | 'attachment' | 'save' | 'defaultButton' | 'facebook' | 'google' | 'userCategory' | 'userCategoryDisplay' | 'payNow' | 'paid' | 'registered' | 'coHost' | 'filter' | 'filterData' | 'filteredData' | 'footerButton' | 'join';
  disabled?: boolean;
  outline?: boolean;
  rounded?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'filter' | 'clear';
  submit?: boolean;
}

type ButtonRef = React.ForwardedRef<HTMLButtonElement>;

const style = {
  rounded: `rounded-full`,
  block: `flex justify-center w-full`,
  default: `focus:outline-none font-medium transition ease-in duration-200 `,
  disabled: `opacity-60 cursor-not-allowed`,
  sizes: {
    sm: 'px-3 text-sm',
    md: 'px-6 p-input',
    lg: 'px-6 py-3 text-lg',
    filter: 'px-4 py-0',
    clear: 'px-4 py-1',
  },
  color: {
    primary: {
      bg: `bg-EB-yellow focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700 focus:ring-offset-yellow-200 hover:bg-yellow-600 text-white `,
      outline: `border-EB-yellow border-2 active:bg-EB-yellow text-white`,
    },
    plain: {
      bg: `bg-white focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700 focus:ring-offset-yellow-200 hover:bg-EB-yellow hover:text-white border border-EB-yellow`,
      outline: `border-EB-yellow border-2 active:bg-EB-yellow text-white`,
    },
    success: {
      bg: `bg-green-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-700 focus:ring-offset-green-200`,
      outline: `border-green-700 border-2 text-green-700 active:bg-green-700 active:text-white`,
    },
    danger: {
      bg: `bg-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-red-400 focus:ring-offset-red-200 text-white`,
      outline: `border-red-600 border-2 text-red-600 active:bg-red-600 active:text-white`,
    },
    dark: {
      bg: `bg-BeeMG-light-gray text-black hover:bg-BeeMG-yellow hover:text-black uppercase mx-2`,
      outline: `border-black border-2 text-gray-900 active:bg-black active:text-white`,
    },
    warning: {
      bg: `bg-BeeMG-yellow focus:ring-2 focus:ring-offset-2 focus:ring-BeeMG-yellow focus:ring-offset-yellow-200`,
      outline: `border-BeeMG-yellow border-2 text-BeeMG-yellow active:bg-BeeMG-yellow active:text-white`,
    },
    indigo: {
      bg: `bg-indigo-900 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-900 focus:ring-offset-indigo-200`,
      outline: `border-indigo-900 border-2 text-indigo-900 active:bg-indigo-900 active:text-white`,
    },
    category: {
      bg: `bg-BeeMG-light-gray text-black hover:bg-BeeMG-yellow`,
      outline: `border-black border-2 text-gray-900 active:bg-black active:text-white`,
    },
    filter: {
      bg: `bg-transparent text-black hover:bg-BeeMG-yellow mx-2 text-normal`,
      outline: `border-black border-2 text-gray-900 active:bg-black active:text-white`,
    },
    join: {
      bg: `text-black bg-BeeMG-yellow mx-2 text-normal p-1 font-bold uppercase`,
      outline: `border-black border-2 text-gray-900 active:bg-black active:text-white`,
    },
    userCategory: {
      bg: `bg-BeeMG-yellow px-3 font-medium rounded- cursor-pointer whitespace-nowrap flex flex-row justify-between `,
      outline: `active:bg-black`,
    },
    userCategoryDisplay: {
      bg: `bg-BeeMG-yellow px-3 font-medium rounded- cursor-auto whitespace-nowrap flex flex-row justify-between `,
      outline: `active:bg-black`,
    },
    userProfileCategory: {
      bg: `bg-BeeMG-light-gray px-2 font-medium rounded-md cursor-pointer whitespace-nowrap flex flex-row justify-between	`,
      outline: `active:bg-black`,
    },
    filterData: {
      bg: `bg-BeeMG-light-gray hover:bg-yellow-300 text-black hover:bg-BeeMG-yellow m-2`,
      outline: `border-black border-2 text-gray-900 active:bg-black active:text-white`,
    },
    filteredData: {
      bg: `bg-yellow-300 px-2 font-medium rounded-md cursor-auto`,
      outline: `active:bg-black`,
    },
    payNow: {
      bg: `bg-BeeMG-light-gray hover:bg-green-600 text-black hover:text-white px-3 py-0.5 font-medium rounded-lg rounded uppercase`,
      outline: `border-black border-2`,
    },
    paid: {
      bg: `bg-red-600 text-white px-3 font-medium rounded-lg rounded uppercase cursor-not-allowed`,
      outline: `border-black border-2`,
    },
    registered: {
      bg: `bg-BeeMG-light-gray text-black px-3 font-medium rounded-lg rounded uppercase`,
      outline: `border-black border-2`,
    },
    coHost: {
      bg: `bg-orange-500 text-white px-3 font-medium rounded-lg rounded uppercase cursor-auto`,
      outline: `border-black border-2`,
    },
    attachment: {
      bg: `border-black border-dashed border-2 p-3 text-black mx-2`,
      outline: `text-gray-900 active:bg-black active:text-white`,
    },
    defaultButton: {
      bg: `bg-BeeMG-light-gray uppercase hover:bg-gray-600 hover:text-white rounded-lg`,
      outline: `border-2 text-black`,
    },
    save: {
      bg: `bg-BeeMG-light-gray uppercase hover:bg-BeeMG-yellow text-black font-semibold`,
      outline: `border-2`,
    },
    footerButton: {
      bg: `bg-BeeMG-light-gray text-base uppercase hover:bg-BeeMG-yellow font-semibold focus:outline-none focus:ring focus:ring-gray-300 rounded px-2 text-black`,
      outline: `border-2`,
    },
    facebook: {
      bg: `bg-transparent hover:bg-blue-700 text-blue-800 hover:text-white font-bold`,
      outline: `border-2 text-black`,
    },
    google: {
      bg: `bg-transparent hover:bg-red-700 text-red-500 hover:text-white font-bold`,
      outline: `border-2 text-black`,
    },
  },
};

const colors = (outline: boolean) => ({
  primary: outline ? style.color.primary.outline : style.color.primary.bg,
  plain: outline ? style.color.plain.outline : style.color.plain.bg,
  success: outline ? style.color.success.outline : style.color.success.bg,
  danger: outline ? style.color.danger.outline : style.color.danger.bg,
  dark: outline ? style.color.dark.outline : style.color.dark.bg,
  warning: outline ? style.color.warning.outline : style.color.warning.bg,
  indigo: outline ? style.color.indigo.outline : style.color.indigo.bg,
  category: outline ? style.color.category.outline : style.color.category.bg,
  filter: outline ? style.color.filter.outline : style.color.filter.bg,
  join: outline ? style.color.join.outline : style.color.join.bg,
  userCategory: outline ? style.color.userCategory.outline : style.color.userCategory.bg,
  userCategoryDisplay: outline ? style.color.userCategoryDisplay.outline : style.color.userCategoryDisplay.bg,
  userProfileCategory: outline ? style.color.userProfileCategory.outline : style.color.userProfileCategory.bg,
  filterData: outline ? style.color.filterData.outline : style.color.filterData.bg,
  filteredData: outline ? style.color.filteredData.outline : style.color.filteredData.bg,
  payNow: outline ? style.color.payNow.outline : style.color.payNow.bg,
  paid: outline ? style.color.paid.outline : style.color.paid.bg,
  registered: outline ? style.color.registered.outline : style.color.registered.bg,
  coHost: outline ? style.color.coHost.outline : style.color.coHost.bg,
  attachment: outline ? style.color.attachment.outline : style.color.attachment.bg,
  defaultButton: outline ? style.color.defaultButton.outline : style.color.defaultButton.bg,
  save: outline ? style.color.save.outline : style.color.save.bg,
  footerButton: outline ? style.color.footerButton.outline : style.color.footerButton.bg,
  facebook: outline ? style.color.facebook.outline : style.color.facebook.bg,
  google: outline ? style.color.google.outline : style.color.google.bg,
});

const Button = React.forwardRef(({
  block = false,
  children,
  className,
  color,
  disabled = false,
  outline = false,
  rounded,
  size = 'md',
  submit,
  ...props
}: BtnProps, ref: ButtonRef) => (
  <button
    ref={ref} {...props} type={submit ? 'submit' : 'button'} disabled={disabled}
    className={`${block ? style.block : ''} ${disabled ? style.disabled : ''} 
      ${style.sizes[size]} ${style.default} ${rounded ? style.rounded : 'rounded-md'} 
      ${color ? colors(outline)[color] : colors(outline).dark} ${className ?? ''} `}
  >
    {children}
  </button>
),
);

Button.displayName = 'Button';

export default Button;
