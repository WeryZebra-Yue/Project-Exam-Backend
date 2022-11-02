"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const User = new _mongoose.default.Schema({
  e_id: {
    type: String
  },
  eid: {
    type: String
  },
  //   Name, Number, 2 x Email
  personalDetails: {
    type: Object
  },
  // Institute details name, distance, role
  instituteDetails: {
    type: Object
  },
  // Documents bank passbook, rc_book, d_licence, Bank Details (IFSC, Account Number, Account Holder Name), passbook, rc_book, d_licence, Bank Details (IFSC, Account Number, Account Holder Name)
  documents: {
    type: Object
  },
  roles: {
    type: Object
  },
  createdAt: {
    type: Date
  }
});

var _default = _mongoose.default.model("User", User);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJVc2VyIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJlX2lkIiwidHlwZSIsIlN0cmluZyIsImVpZCIsInBlcnNvbmFsRGV0YWlscyIsIk9iamVjdCIsImluc3RpdHV0ZURldGFpbHMiLCJkb2N1bWVudHMiLCJyb2xlcyIsImNyZWF0ZWRBdCIsIkRhdGUiLCJtb2RlbCJdLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9tb2RlbHMvRXhhbWluZXJNb2RlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBVc2VyID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgZV9pZDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gIH0sXHJcbiAgZWlkOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgfSxcclxuICAvLyAgIE5hbWUsIE51bWJlciwgMiB4IEVtYWlsXHJcbiAgcGVyc29uYWxEZXRhaWxzOiB7XHJcbiAgICB0eXBlOiBPYmplY3QsXHJcbiAgfSxcclxuICAvLyBJbnN0aXR1dGUgZGV0YWlscyBuYW1lLCBkaXN0YW5jZSwgcm9sZVxyXG4gIGluc3RpdHV0ZURldGFpbHM6IHtcclxuICAgIHR5cGU6IE9iamVjdCxcclxuICB9LFxyXG4gIC8vIERvY3VtZW50cyBiYW5rIHBhc3Nib29rLCByY19ib29rLCBkX2xpY2VuY2UsIEJhbmsgRGV0YWlscyAoSUZTQywgQWNjb3VudCBOdW1iZXIsIEFjY291bnQgSG9sZGVyIE5hbWUpLCBwYXNzYm9vaywgcmNfYm9vaywgZF9saWNlbmNlLCBCYW5rIERldGFpbHMgKElGU0MsIEFjY291bnQgTnVtYmVyLCBBY2NvdW50IEhvbGRlciBOYW1lKVxyXG4gIGRvY3VtZW50czoge1xyXG4gICAgdHlwZTogT2JqZWN0LFxyXG4gIH0sXHJcbiAgcm9sZXM6IHtcclxuICAgIHR5cGU6IE9iamVjdCxcclxuICB9LFxyXG4gIGNyZWF0ZWRBdDoge1xyXG4gICAgdHlwZTogRGF0ZSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVsKFwiVXNlclwiLCBVc2VyKTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsSUFBSUMsaUJBQUEsQ0FBU0MsTUFBYixDQUFvQjtFQUMvQkMsSUFBSSxFQUFFO0lBQ0pDLElBQUksRUFBRUM7RUFERixDQUR5QjtFQUkvQkMsR0FBRyxFQUFFO0lBQ0hGLElBQUksRUFBRUM7RUFESCxDQUowQjtFQU8vQjtFQUNBRSxlQUFlLEVBQUU7SUFDZkgsSUFBSSxFQUFFSTtFQURTLENBUmM7RUFXL0I7RUFDQUMsZ0JBQWdCLEVBQUU7SUFDaEJMLElBQUksRUFBRUk7RUFEVSxDQVphO0VBZS9CO0VBQ0FFLFNBQVMsRUFBRTtJQUNUTixJQUFJLEVBQUVJO0VBREcsQ0FoQm9CO0VBbUIvQkcsS0FBSyxFQUFFO0lBQ0xQLElBQUksRUFBRUk7RUFERCxDQW5Cd0I7RUFzQi9CSSxTQUFTLEVBQUU7SUFDVFIsSUFBSSxFQUFFUztFQURHO0FBdEJvQixDQUFwQixDQUFiOztlQTJCZVosaUJBQUEsQ0FBU2EsS0FBVCxDQUFlLE1BQWYsRUFBdUJkLElBQXZCLEMifQ==