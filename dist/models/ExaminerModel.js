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
  bankDetails: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJVc2VyIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJlX2lkIiwidHlwZSIsIlN0cmluZyIsImVpZCIsInBlcnNvbmFsRGV0YWlscyIsIk9iamVjdCIsImluc3RpdHV0ZURldGFpbHMiLCJiYW5rRGV0YWlscyIsImRvY3VtZW50cyIsInJvbGVzIiwiY3JlYXRlZEF0IiwiRGF0ZSIsIm1vZGVsIl0sInNvdXJjZXMiOlsiLi4vLi4vc2VydmVyL21vZGVscy9FeGFtaW5lck1vZGVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgVXNlciA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICBlX2lkOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICB9LFxuICBlaWQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gIH0sXG4gIC8vICAgTmFtZSwgTnVtYmVyLCAyIHggRW1haWxcbiAgcGVyc29uYWxEZXRhaWxzOiB7XG4gICAgdHlwZTogT2JqZWN0LFxuICB9LFxuICAvLyBJbnN0aXR1dGUgZGV0YWlscyBuYW1lLCBkaXN0YW5jZSwgcm9sZVxuICBpbnN0aXR1dGVEZXRhaWxzOiB7XG4gICAgdHlwZTogT2JqZWN0LFxuICB9LFxuICBiYW5rRGV0YWlsczoge1xuICAgIHR5cGU6IE9iamVjdCxcbiAgfSxcbiAgLy8gRG9jdW1lbnRzIGJhbmsgcGFzc2Jvb2ssIHJjX2Jvb2ssIGRfbGljZW5jZSwgQmFuayBEZXRhaWxzIChJRlNDLCBBY2NvdW50IE51bWJlciwgQWNjb3VudCBIb2xkZXIgTmFtZSksIHBhc3Nib29rLCByY19ib29rLCBkX2xpY2VuY2UsIEJhbmsgRGV0YWlscyAoSUZTQywgQWNjb3VudCBOdW1iZXIsIEFjY291bnQgSG9sZGVyIE5hbWUpXG4gIGRvY3VtZW50czoge1xuICAgIHR5cGU6IE9iamVjdCxcbiAgfSxcbiAgcm9sZXM6IHtcbiAgICB0eXBlOiBPYmplY3QsXG4gIH0sXG4gIGNyZWF0ZWRBdDoge1xuICAgIHR5cGU6IERhdGUsXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWwoXCJVc2VyXCIsIFVzZXIpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsSUFBSUMsaUJBQUEsQ0FBU0MsTUFBYixDQUFvQjtFQUMvQkMsSUFBSSxFQUFFO0lBQ0pDLElBQUksRUFBRUM7RUFERixDQUR5QjtFQUkvQkMsR0FBRyxFQUFFO0lBQ0hGLElBQUksRUFBRUM7RUFESCxDQUowQjtFQU8vQjtFQUNBRSxlQUFlLEVBQUU7SUFDZkgsSUFBSSxFQUFFSTtFQURTLENBUmM7RUFXL0I7RUFDQUMsZ0JBQWdCLEVBQUU7SUFDaEJMLElBQUksRUFBRUk7RUFEVSxDQVphO0VBZS9CRSxXQUFXLEVBQUU7SUFDWE4sSUFBSSxFQUFFSTtFQURLLENBZmtCO0VBa0IvQjtFQUNBRyxTQUFTLEVBQUU7SUFDVFAsSUFBSSxFQUFFSTtFQURHLENBbkJvQjtFQXNCL0JJLEtBQUssRUFBRTtJQUNMUixJQUFJLEVBQUVJO0VBREQsQ0F0QndCO0VBeUIvQkssU0FBUyxFQUFFO0lBQ1RULElBQUksRUFBRVU7RUFERztBQXpCb0IsQ0FBcEIsQ0FBYjs7ZUE4QmViLGlCQUFBLENBQVNjLEtBQVQsQ0FBZSxNQUFmLEVBQXVCZixJQUF2QixDIn0=