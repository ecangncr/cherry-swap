const CloseIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> = (
  props
) => (
  <svg
    viewBox="0 0 12 12"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    height="28"
    fill="none"
    {...props}>
    <line x1="1" y1="11" x2="11" y2="1" stroke="#6B7280" strokeWidth="2" />
    <line x1="1" y1="1" x2="11" y2="11" stroke="#6B7280" strokeWidth="2" />
  </svg>
);

export default CloseIcon;
