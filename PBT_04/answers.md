Câu A1 : Tài liệu tham chiếu: tuan_2_css_core/12_css_positioning.md / 5 Giá trị Position
Position	Vẫn chiếm chỗ trong flow?	        Tham chiếu vị trí	            Cuộn theo trang?	          Use case
static	            Có 	                   Mặc định (Không dùng top/left)	         Có	                      Mặc định
relative	        Có 	                   Vị trí gốc của chính nó	                 Có	              Dịch nhẹ, làm mốc choabsolute
absolute	       Không 	                Cha relative gần nhất	           Có(cuộn cùng cha)          Badge, dropdown, tooltip
fixed	           Không 	                  Viewport (Khung nhìn)	         Không (Luôn hiển thị)	      Chat button, modal overlay
sticky	        Có → Không                  Viewport (khi đạt ngưỡng)      Có → Không (Dính khi scroll)   Sticky header, sidebar

- absolute sẽ tham chiếu parent khi phần tử cha trực tiếp (hoặc một thẻ bọc bên ngoài nào đó) được thiết lập position: relative (hoặc absolute/fixed/sticky)
- absolute sẽ tham chiếu document (toàn bộ trang) khi phần tử absolute tìm ngược lên trên mà không thấy bất kỳ thẻ cha hay tổ tiên nào có position khác static
- "nearest positioned ancestor"  là thẻ bao bọc bên ngoài gần nhất có thuộc tính position khác với static, nghĩa là phần tử đó phải được set một trong các giá trị: relative,absolute,fixed hoặc sticky

Câu A2: Tài liệu tham chiếu: tuan_3_css_advanced/13_creating_responsive_layouts.md
- /* Trường hợp 1 */
.container { display: flex; }
.item { flex: 1; }
+ Dự đoán: Mặc định Flexbox sẽ xếp các item trên 1 hàng ngang và thuộc tính flex: 1 yêu cầu tất cả các item chia đều không gian trống
+ Sơ đồ bố cục: 
+---------------------------------------------------+
| +---------+  +---------+  +---------+  +---------+|
| | Item 1  |  | Item 2  |  | Item 3  |  | Item 4  ||
| +---------+  +---------+  +---------+  +---------+|
+---------------------------------------------------+

- /* Trường hợp 2 */
.container { display: flex; flex-wrap: wrap; }
.item { width: 45%; margin: 2.5%; }
+ Dự đoán: Mỗi item chiếm tổng cộng 45% (width) + 2.5% (margin-left) + 2.5% (margin-right) = 50% chiều rộng của container.Vì vậy mỗi hàng chỉ chứa được đúng 2 items.flex-wrap: wrap làm các item tiếp theo sẽ bị đẩy xuống dòng mới
+ Sơ đồ bố cục: 
+---------------------------------------------------+
|   +-------------------+   +-------------------+   |
|   |      Item 1       |   |      Item 2       |   |
|   +-------------------+   +-------------------+   |
|                                                   |
|   +-------------------+   +-------------------+   |
|   |      Item 3       |   |      Item 4       |   |
|   +-------------------+   +-------------------+   |
|                                                   |
|   +-------------------+   +-------------------+   |
|   |      Item 5       |   |      Item 6       |   |
|   +-------------------+   +-------------------+   |
+---------------------------------------------------+

- /* Trường hợp 3 */
.container { display: flex; justify-content: space-between; align-items: center; }
+ Dự đoán: Bố cục nằm trên 1 hàng ngang , justify-content: space-between sẽ đẩy Item 1 dính sát mép trái, Item 3 dính sát mép phải, Item 2 nằm chính giữa, align-items: center sẽ căn giữa tất cả các item theo trục dọc 
+ Sơ đồ bố cục: 
+-------------------------------------------------------+
|                                                       |
|[Item 1]                   [Item 2]                   [Item 3]|
|                                                       |
+-------------------------------------------------------+

- /* Trường hợp 4 */
.container { display: grid; grid-template-columns: 200px 1fr 200px; gap: 20px; }
+ Dự đoán: Container sử dụng Grid với 3 cột được định nghĩa sẵn. Cột trái cố định 200px,cột phải cố định 200px.Cột giữa (1fr) sẽ phình ra chiếm toàn bộ không gian còn lại ở giữa,khoảng cách giữa các cột là 20px,3 item sẽ tự động lấp đầy 3 ô trên hàng đầu tiên
+ Sơ đồ bố cục:
+---------------------------------------------------------------+
| +-------+   +-----------------------------------+   +-------+ |
| | 200px |   |                1fr                |   | 200px | |
| | Item1 |   |               Item 2              |   | Item3 | |
| +-------+   +-----------------------------------+   +-------+ |
+---------------------------------------------------------------+

/* Trường hợp 5 */
.container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
- Dự đoán: Grid được chia làm 3 cột bằng nhau (mỗi cột 1fr).Khi có 7 items, Grid sẽ tự động tạo ra các hàng mới để chứa hết,hàng 1 chứa items 1-2-3,hàng 2 chứa items 4-5-6,Item 7 sẽ bị đẩy xuống hàng thứ 3. Do không có định dạng gì đặc biệt,Item 7 sẽ nằm ở ô đầu tiên bên trái của hàng 3, 2 ô còn lại sẽ để trống
+ Sơ đồ bố cục:
+---------------------------------------------------+
| +---------+   +---------+   +---------+           |
| | Item 1  |   | Item 2  |   | Item 3  |           |
| +---------+   +---------+   +---------+           |
|                                                   |
| +---------+   +---------+   +---------+           |
| | Item 4  |   | Item 5  |   | Item 6  |           |
| +---------+   +---------+   +---------+           |
|                                                   |
| +---------+                                       |
| | Item 7  |         (Trống)        (Trống)        |
| +---------+                                       |
+---------------------------------------------------+

