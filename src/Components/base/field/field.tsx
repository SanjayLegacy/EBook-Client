import { forwardRef, HTMLAttributes } from 'react';

interface FieldProps extends HTMLAttributes<HTMLElement> {
  disabled?: boolean;
  dot?: boolean;
  error?: any;
  accept?: string;
  icon?: JSX.Element;
  label?: string;
  name: string;
  type: string;
  readOnly?: boolean;
  maxLength?: number;
  restrict?: string;
  className?: string;
  min?: string | number;
  defaultValue?: string | number | undefined;
  value?: string | number | undefined;
  rows?: number;
  cols?: number;
  options?: {
    value: string,
    label: string
  }[];
}

const style = {
  checkbox: `checked:bg-TT-blue checked:right-0 focus:ring-transparent focus:outline-none right-4 duration-200 ease-in absolute block w-5 h-5 -top-1.5 rounded-full bg-white border-4 appearance-none cursor-pointer`,
  checkboxContainer: `relative w-10 mr-2 align-middle select-none mt-2`,
  checkboxLabel: `block overflow-hidden h-1.5 rounded-full bg-gray-300 ml-1`,
  container: `relative `,
  message: `text-base relative flex flex-1 w-full rounded-l-lg rounded-r-none py-1 pl-4 pr-10 bg-white text-gray-700 placeholder:text-sm placeholder-gray-400 text-base focus:outline-none focus:ring-1 focus:ring-BeeMG-yellow focus:border-transparent border border-gray-300`,
  jitsiChatMessage: `text-base relative flex flex-1 w-full rounded-l-lg rounded-r-none py-1 pl-4 pr-10 bg-white text-gray-700 placeholder:text-sm placeholder-gray-400 text-base focus:outline-none focus:ring-1 focus:ring-BeeMG-yellow focus:border-transparent border border-gray-300 h-full`,
  default: `leading-5 text-sm relative flex flex-1 w-full rounded-lg p-input bg-white text-gray-700 md:text-base placeholder:text-sm placeholder-gray-400 text-sm focus:outline-none focus:ring-1 focus:ring-BeeMG-yellow focus:border-transparent border border-gray-300 p-2`,
  dropDown: `leading-5 text-base relative flex flex-1 w-full rounded-lg py-2 px-4 bg-white text-gray-700 placeholder:text-sm placeholder-gray-400 text-base focus:outline-none focus:ring-1 focus:ring-BeeMG-yellow focus:border-transparent border border-gray-300`,
  textArea: `text-base relative flex flex-1 w-full rounded-lg py-2 px-4 bg-white text-gray-700 placeholder:text-sm placeholder-gray-400 text-base focus:outline-none focus:ring-1 focus:ring-BeeMG-yellow focus:border-transparent border border-gray-300 h-auto`,
  disabled: `cursor-text bg-gray-300 text-black`,
  dot: `text-red-500 pl-0.5`,
  error: `ring-red-500 ring-1`,
  errorMessage: `text-sm text-red-500 mt-2`,
  iconContainer: `absolute flex border border-transparent  rounded-lg left-0 top-0 h-full w-10`,
  iconContainerRight: `absolute flex border border-transparent  rounded-lg right-0 top-0 h-full w-10`,
  icon: `flex items-center justify-center rounded-tl-md rounded-bl-md z-10 text-gray-400 text-lg h-full w-full bg-white `,
  iconRight: `flex items-center justify-center border-l rounded-tr-md rounded-br-md z-10 text-gray-400 text-lg h-full w-full bg-white `,
}

const Field = forwardRef((props: FieldProps, ref: any) => {
  const {
    disabled,
    dot,
    type = 'text',
    error,
    icon,
    label,
    name,
    options,
    readOnly,
    restrict,
    className,
    maxLength,
    defaultValue,
    value,
    min,
    rows,
    cols,
    accept,
    ...rest
  } = props;

  let component;

  if (type === 'select') {
    component = (
      <select
        aria-required={dot} aria-invalid={!!error} disabled={disabled} id={name} name={name} ref={ref} {...rest}
        value={value}
        defaultValue={defaultValue}
        className={`${style.dropDown} ${disabled ? style.disabled : ''} ${error ? style.error : 'border-gray-300'}`}
      />
    );
  }

  if (type === 'textarea') {
    component = (
      <textarea
        aria-required={dot} aria-invalid={!!error} disabled={disabled} id={name} name={name} ref={ref} rows={rows} defaultValue={defaultValue} cols={cols} {...rest}
        className={`${style.textArea} ${disabled ? style.disabled : ''} ${error ? style.error : 'border-gray-300'}`}
      />
    );
  }

  if (type === 'message') {
    component = (
      <input
        aria-required={dot} aria-invalid={!!error} disabled={disabled} type='text' id={name} name={name} maxLength={maxLength} ref={ref}
        {...rest} className={`${style.jitsiChatMessage} ${disabled ? style.disabled : ''} ${error ? style.error : 'border-gray-300'}`}
      />
    );
  }

  if (type === 'checkbox') {
    component = (
      <div className={style.checkboxContainer}>
        <input
          aria-required={dot} aria-invalid={!!error} className={`${style.checkbox} ${disabled ? style.disabled : ''}`}
          style={{ backgroundImage: `none` }} disabled={disabled} autoComplete="off" id={name} name={name} type="checkbox" ref={ref}
          readOnly={readOnly} {...rest}
        />
        <label htmlFor={readOnly ? undefined : name} className={style.checkboxLabel} />
      </div>
    )
  }

  if (type !== 'checkbox' && type !== 'select' && type !== 'textarea' && type !== 'message') {
    component = (
      <div className="relative">
        {icon && <div className={style.iconContainer}><div className={style.icon}>{icon}</div></div>}
        <input
          aria-required={dot} aria-invalid={!!error} disabled={disabled} autoComplete="off" maxLength={maxLength} id={name} name={name}
          type={type} ref={ref} {...rest} value={value}
          className={`${style.default} ${icon ? 'pl-12' : ''} ${error ? style.error : 'border-gray-300'} ${disabled ? style.disabled : ''} ${className ? className : ''}`}
        />
        {error && <ErrorIcon />}
      </div>
    )
  }

  if (type === 'number') {
    component = (
      <div className="relative">
        {icon && <div className={style.iconContainer}><div className={style.icon}>{icon}</div></div>}
        <input
          aria-required={dot} aria-invalid={!!error} disabled={disabled} autoComplete="off" id={name} name={name} type={type} min={min}
          ref={ref} {...rest}
          className={`${style.default} ${icon ? 'pl-12' : ''} ${error ? style.error : 'border-gray-300'} ${disabled ? style.disabled : ''} ${className ? className : ''}`}
        />
        {error && <ErrorIcon />}
      </div>
    )
  }

  if (type !== 'checkbox' && type !== 'select' && type !== 'textarea' && (type === 'inputGroup' || type === 'text')) {
    component = (
      <div className="relative">
        {icon && <div className={style.iconContainerRight}><div className={style.iconRight}>{icon}</div></div>}
        <input
          aria-required={dot} aria-invalid={!!error} disabled={disabled} autoComplete="off" maxLength={maxLength} id={name} name={name}
          defaultValue={defaultValue} type="text" ref={ref} {...rest} accept={accept} value={value}
          className={`${style.default} ${error ? style.error : 'border-gray-300'} ${disabled ? style.disabled : ''} ${className ? className : ''}`}
        />
        {error && <ErrorIcon />}
      </div>
    )
  }

  if (type !== 'checkbox' && type !== 'select' && type !== 'textarea' && (type === 'inputGroupNumber')) {
    component = (
      <div className="relative">
        {icon && <div className={style.iconContainerRight}><div className={style.iconRight}>{icon}</div></div>}
        <input
          aria-required={dot} aria-invalid={!!error} disabled={disabled} autoComplete="off" maxLength={maxLength} id={name} name={name}
          type="number" ref={ref} {...rest} value={value}
          className={`${style.default} ${error ? style.error : 'border-gray-300'} ${disabled ? style.disabled : ''} ${className ? className : ''}`}
        />
        {error && <ErrorIcon />}
      </div>
    )
  }

  return (
    <div className={`${type !== 'select' ? style.container : ''} ${disabled ? 'opacity-50' : ''}`}>
      <label htmlFor={name} className="text-gray-700">{label}{dot && <span className={style.dot}>*</span>}</label>
      {component}
      {error && (<div role="alert" data-testid={error} id="error_message" className={style.errorMessage}>{(error)}</div>)}
    </div>
  );
});

const ErrorIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="absolute right-2 -mt-6 text-red-500"
    viewBox="0 0 1792 1792"
  >
    <path
      d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z"
    />
  </svg>
);

export const LockIcon = () => (
  <svg
    height="20" width="20" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"
    />
  </svg>
);

Field.displayName = 'Field';

export default Field;
